'use client';

import React, { useState } from 'react';

export default function ComponentsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [selectValue, setSelectValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLoadingTest = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">元件庫展示</h1>
        <p className="text-lg text-gray-600">
          Morning AI Design System 核心元件，包含 Button、Input、Navigation 等 16+ 響應式元件。
        </p>
      </div>
      
      <div className="space-y-12">
        {/* Button 元件 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Button 元件</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-3">按鈕變體</h3>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Primary</button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">Secondary</button>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">Outline</button>
                <button className="px-4 py-2 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">Ghost</button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">Success</button>
                <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">Warning</button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Error</button>
                <button className="px-4 py-2 text-blue-600 underline hover:text-blue-700 transition-colors">Link</button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">按鈕尺寸</h3>
              <div className="flex flex-wrap items-center gap-3">
                <button className="px-2 py-1 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Small</button>
                <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Medium</button>
                <button className="px-6 py-3 text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Large</button>
                <button className="px-8 py-4 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Extra Large</button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">按鈕狀態</h3>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Normal</button>
                <button className="px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed" disabled>Disabled</button>
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                  onClick={handleLoadingTest}
                  disabled={loading}
                >
                  {loading && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>}
                  {loading ? '載入中...' : '點擊測試載入'}
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">全寬按鈕</h3>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Full Width Button</button>
            </div>
          </div>
        </section>

        {/* Input 元件 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Input 元件</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">基本輸入框</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="請輸入姓名" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input 
                  type="email" 
                  placeholder="請輸入電子郵件" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input 
                  type="password" 
                  placeholder="請輸入密碼" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input 
                  type="text" 
                  defaultValue="這是預設值" 
                  placeholder="這是帶有預設值的輸入框" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">帶標籤示例</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                  <input 
                    type="text" 
                    placeholder="請輸入您的姓名" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">電子郵件</label>
                  <input 
                    type="email" 
                    placeholder="example@email.com" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="mt-1 text-xs text-gray-500">我們不會分享您的電子郵件地址</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">密碼</label>
                  <input 
                    type="password" 
                    placeholder="請輸入密碼" 
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <p className="mt-1 text-xs text-red-500">密碼至少需要 8 個字符</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">輸入框尺寸</h3>
            <div className="space-y-3">
              <input 
                type="text" 
                placeholder="Small input" 
                className="w-full px-2 py-1 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input 
                type="text" 
                placeholder="Medium input" 
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input 
                type="text" 
                placeholder="Large input" 
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* 常用表單元件 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">常用表單元件</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Select 下拉選單</h3>
              <div className="space-y-4">
                <select 
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">請選擇選項</option>
                  <option value="option1">選項 1</option>
                  <option value="option2">選項 2</option>
                  <option value="option3">選項 3</option>
                </select>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">帶標籤的下拉選單</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">請選擇選項</option>
                    <option value="option1">選項 1</option>
                    <option value="option2">選項 2</option>
                  </select>
                  <p className="mt-1 text-xs text-gray-500">請選擇一個選項</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">錯誤狀態</label>
                  <select className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option value="">請選擇選項</option>
                    <option value="option1">選項 1</option>
                  </select>
                  <p className="mt-1 text-xs text-red-500">請選擇有效的選項</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Textarea 文字區域</h3>
              <div className="space-y-4">
                <textarea 
                  placeholder="請輸入您的訊息..."
                  value={textareaValue}
                  onChange={(e) => setTextareaValue(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">帶字數統計</label>
                  <textarea 
                    placeholder="請輸入內容..."
                    maxLength={200}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>最多 200 個字符</span>
                    <span>0/200</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">錯誤狀態</label>
                  <textarea 
                    placeholder="請輸入內容..."
                    rows={3}
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-vertical"
                  />
                  <p className="mt-1 text-xs text-red-500">內容不能為空</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 選擇元件 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">選擇元件</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Checkbox 核取方塊</h3>
              <div className="space-y-4">
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    checked={checkboxChecked}
                    onChange={(e) => setCheckboxChecked(e.target.checked)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">我同意服務條款</span>
                </label>
                
                <label className="flex items-start space-x-2">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-700">接收電子郵件通知</span>
                    <p className="text-xs text-gray-500">您可以隨時取消訂閱</p>
                  </div>
                </label>
                
                <label className="flex items-start space-x-2">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 text-red-600 border-red-300 rounded focus:ring-red-500 mt-0.5"
                  />
                  <div>
                    <span className="text-sm font-medium text-red-700">錯誤狀態</span>
                    <p className="text-xs text-red-500">此選項為必填</p>
                  </div>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    disabled
                    className="h-4 w-4 text-gray-400 border-gray-300 rounded cursor-not-allowed"
                  />
                  <span className="text-sm font-medium text-gray-400">禁用狀態</span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Radio 單選按鈕</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      name="radio-demo"
                      value="option1"
                      checked={radioValue === 'option1'}
                      onChange={(e) => setRadioValue(e.target.value)}
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">選項 1</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      name="radio-demo"
                      value="option2"
                      checked={radioValue === 'option2'}
                      onChange={(e) => setRadioValue(e.target.value)}
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">選項 2</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      name="radio-demo"
                      value="option3"
                      checked={radioValue === 'option3'}
                      onChange={(e) => setRadioValue(e.target.value)}
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">選項 3</span>
                  </label>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-sm font-medium mb-2">錯誤狀態</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        name="radio-error"
                        value="error1"
                        className="h-4 w-4 text-red-600 border-red-300 focus:ring-red-500"
                      />
                      <span className="text-sm font-medium text-red-700">錯誤選項 1</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        name="radio-error"
                        value="error2"
                        className="h-4 w-4 text-red-600 border-red-300 focus:ring-red-500"
                      />
                      <span className="text-sm font-medium text-red-700">錯誤選項 2</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Switch 開關</h3>
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <div className="relative">
                  <input 
                    type="checkbox" 
                    checked={switchChecked}
                    onChange={(e) => setSwitchChecked(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`block w-14 h-8 rounded-full transition-colors ${switchChecked ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                  <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${switchChecked ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </div>
                <span className="text-sm font-medium text-gray-700">啟用通知</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-700">左側標籤</span>
                <div className="relative">
                  <input type="checkbox" className="sr-only" />
                  <div className="block w-14 h-8 rounded-full bg-gray-300"></div>
                  <div className="absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform"></div>
                </div>
              </label>
              
              <div>
                <label className="flex items-center space-x-3">
                  <div className="relative">
                    <input type="checkbox" className="sr-only" />
                    <div className="block w-14 h-8 rounded-full bg-red-300"></div>
                    <div className="absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform"></div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-red-700">錯誤狀態</span>
                    <p className="text-xs text-red-500">發生錯誤</p>
                  </div>
                </label>
              </div>
              
              <label className="flex items-center space-x-3">
                <div className="relative opacity-50">
                  <input type="checkbox" disabled className="sr-only" />
                  <div className="block w-14 h-8 rounded-full bg-gray-300"></div>
                  <div className="absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform"></div>
                </div>
                <span className="text-sm font-medium text-gray-400">禁用狀態</span>
              </label>
            </div>
          </div>
        </section>

        {/* 回饋元件 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">回饋元件</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Loading 載入指示器</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">載入動畫變體</h4>
                  <div className="flex items-center space-x-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                    <div className="flex space-x-1">
                      <div className="animate-pulse h-2 w-2 bg-blue-600 rounded-full"></div>
                      <div className="animate-pulse h-2 w-2 bg-blue-600 rounded-full" style={{animationDelay: '0.2s'}}></div>
                      <div className="animate-pulse h-2 w-2 bg-blue-600 rounded-full" style={{animationDelay: '0.4s'}}></div>
                    </div>
                    <div className="animate-pulse h-6 w-6 bg-blue-600 rounded-full"></div>
                    <div className="flex space-x-1">
                      <div className="animate-pulse h-4 w-1 bg-blue-600"></div>
                      <div className="animate-pulse h-4 w-1 bg-blue-600" style={{animationDelay: '0.1s'}}></div>
                      <div className="animate-pulse h-4 w-1 bg-blue-600" style={{animationDelay: '0.2s'}}></div>
                      <div className="animate-pulse h-4 w-1 bg-blue-600" style={{animationDelay: '0.3s'}}></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">帶文字的載入</h4>
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                    <span className="text-sm font-medium text-blue-600">載入中...</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">不同尺寸</h4>
                  <div className="flex items-center space-x-4">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">互動元件</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Modal 模態框</h4>
                  <button 
                    onClick={() => setModalOpen(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    開啟 Modal
                  </button>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Tooltip 提示框</h4>
                  <button 
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    title="這是一個提示訊息"
                  >
                    懸停查看提示
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 元件開發狀態 */}
        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">元件開發狀態</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Button', status: '完成', count: '8/8' },
              { name: 'Input', status: '完成', count: '8/8' },
              { name: 'TopNavigation', status: '完成', count: '6/8' },
              { name: 'Select', status: '完成', count: '8/8' },
              { name: 'Textarea', status: '完成', count: '8/8' },
              { name: 'Checkbox', status: '完成', count: '8/8' },
              { name: 'Radio', status: '完成', count: '8/8' },
              { name: 'Switch', status: '完成', count: '8/8' },
              { name: 'Modal', status: '完成', count: '8/8' },
              { name: 'Toast', status: '完成', count: '8/8' },
              { name: 'Loading', status: '完成', count: '8/8' },
              { name: 'Tooltip', status: '完成', count: '8/8' },
            ].map((component) => (
              <div key={component.name} className="flex items-center justify-between p-3 bg-white rounded border">
                <span className="font-medium">{component.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">狀態數: {component.count}</span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    ✓ {component.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">示例 Modal</h3>
              <button 
                onClick={() => setModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <p>這是一個示例 Modal 對話框。</p>
              <p>您可以在這裡放置任何內容，包括表單、圖片或其他元件。</p>
              <div className="flex justify-end space-x-2 pt-4">
                <button 
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  取消
                </button>
                <button 
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  確認
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

