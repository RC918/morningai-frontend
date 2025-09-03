/**
 * 安全載入 messages，將「空值」一律視為缺值並回退到 en。
 * 這層在 SSG/SSR/CSR 都生效，避免任何情況顯示 key。
 */
import deepmerge from 'deepmerge';

type Dict = Record<string, any>;

function isEmptyVal(v: any) {
  return (
    v === undefined ||
    v === null ||
    (typeof v === 'string' && v.trim().length === 0)
  );
}

function mergeWithFallback(target: Dict, base: Dict): Dict {
  // 只在「值層級」把空值替換成 base；巢狀結構保留
  const out: Dict = Array.isArray(target) ? {} : { ...(target || {}) };
  for (const k of Object.keys(base)) {
    const t = target?.[k];
    const b = base[k];
    if (b && typeof b === 'object' && !Array.isArray(b)) {
      out[k] = mergeWithFallback(t || {}, b);
    } else {
      out[k] = isEmptyVal(t) ? b : t;
    }
  }
  return out;
}

export async function loadMessages(locale: string): Promise<Dict> {
  // 動態載入 JSON（避免 tree-shake 掉非當前語系檔案）
  const base: Dict = (await import(`../../messages/en.json`)).default;
  let cur: Dict;
  try {
    cur = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    // 沒有對應檔案就直接退回英文
    return base;
  }
  // 先以結構深合併，再把空值替換為 base
  const structural = deepmerge(base, cur || {});
  return mergeWithFallback(structural, base);
}

