'use client';

import { useEffect, useState } from 'react';

type VersionInfoType = {
  version: string;
  commit: string;
  shortCommit: string;
  buildId: string;
  buildTime: string;
};

export const VersionInfo = () => {
  const [versionInfo, setVersionInfo] = useState<VersionInfoType | null>(null);

  useEffect(() => {
    const fetchVersionInfo = async () => {
      try {
        const response = await fetch('/api/version');
        if (response.ok) {
          const data = await response.json();
          setVersionInfo(data);
        }
      } catch (error) {
        console.warn('Failed to fetch version info:', error);
      }
    };

    fetchVersionInfo();
  }, []);

  if (!versionInfo) {
    return null;
  }

  return (
    <div className="mt-2 text-xs text-gray-500">
      <div>
        v
        {versionInfo.version}
      </div>
      <div>
        Build:
        {' '}
        {versionInfo.shortCommit || versionInfo.commit?.substring(0, 7) || 'unknown'}
      </div>
    </div>
  );
};
