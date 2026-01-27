import React, { useState, useEffect } from 'react'
import foodOptions from '../data/foods'

const MenuEditor = () => {
  // 状态管理
  const [foods, setFoods] = useState([])
  const [filteredFoods, setFilteredFoods] = useState([])
  const [editingFood, setEditingFood] = useState(null)
  const [isHotFilter, setIsHotFilter] = useState('all')
  const [timeFilter, setTimeFilter] = useState('all')
  const [cuisineFilter, setCuisineFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [foodToDelete, setFoodToDelete] = useState(null)

  // 初始化数据
  useEffect(() => {
    // 从localStorage读取数据，如果不存在则使用默认数据
    const savedFoods = localStorage.getItem('foods')
    if (savedFoods) {
      try {
        const parsedFoods = JSON.parse(savedFoods)
        setFoods(parsedFoods)
        setFilteredFoods(parsedFoods)
      } catch (error) {
        console.error('Failed to parse saved foods:', error)
        setFoods(foodOptions)
        setFilteredFoods(foodOptions)
      }
    } else {
      setFoods(foodOptions)
      setFilteredFoods(foodOptions)
    }
  }, [])

  // 过滤食物
  useEffect(() => {
    let filtered = foods.filter(food => {
      const matchHot = isHotFilter === 'all' || (isHotFilter === 'yes' ? food.isHot : !food.isHot)
      const matchTime = timeFilter === 'all' || food.time === timeFilter
      const matchCuisine = cuisineFilter === 'all' || food.cuisine === cuisineFilter
      const matchType = typeFilter === 'all' || food.type === typeFilter
      return matchHot && matchTime && matchCuisine && matchType
    })
    setFilteredFoods(filtered)
  }, [foods, isHotFilter, timeFilter, cuisineFilter, typeFilter])

  // 处理编辑
  const handleEdit = (food) => {
    setEditingFood(food)
    setShowAddModal(true)
  }

  // 处理保存
  const handleSave = () => {
    if (editingFood) {
      // 检查是否是新菜品（id是否存在于现有数组中）
      const isNewFood = !foods.some(food => food.id === editingFood.id)
      let updatedFoods
      if (isNewFood) {
        // 新菜品：添加到数组
        updatedFoods = [...foods, editingFood]
      } else {
        // 现有菜品：更新数组
        updatedFoods = foods.map(food => 
          food.id === editingFood.id ? editingFood : food
        )
      }
      setFoods(updatedFoods)
      setEditingFood(null)
      // 保存到localStorage
      localStorage.setItem('foods', JSON.stringify(updatedFoods))
    }
  }

  // 处理取消
  const handleCancel = () => {
    setEditingFood(null)
  }

  // 处理删除
  const handleDelete = (id) => {
    setFoodToDelete(id)
    setShowDeleteConfirm(true)
  }

  // 确认删除
  const confirmDelete = () => {
    if (foodToDelete) {
      const updatedFoods = foods.filter(food => food.id !== foodToDelete)
      setFoods(updatedFoods)
      // 保存到localStorage
      localStorage.setItem('foods', JSON.stringify(updatedFoods))
      setShowDeleteConfirm(false)
      setFoodToDelete(null)
    }
  }

  // 取消删除
  const cancelDelete = () => {
    setShowDeleteConfirm(false)
    setFoodToDelete(null)
  }

  // 处理添加新菜品
  const handleAdd = () => {
    const newFood = {
      id: Date.now(),
      name: '',
      cuisine: '川菜',
      isHot: false,
      time: '短',
      ingredients: '',
      description: '',
      type: '荤菜'
    }
    setEditingFood(newFood)
    setShowAddModal(true)
  }

  return (
    <div className="container">
      {/* 筛选器 */}
      <div className="filter-section">
        <form className="form-row">
          <div className="form-group">
            <label htmlFor="isHotFilter" style={{color: '#333'}}>是否上火：</label>
            <select 
              id="isHotFilter" 
              value={isHotFilter} 
              onChange={(e) => setIsHotFilter(e.target.value)}
            >
              <option value="all">不限</option>
              <option value="yes">上火</option>
              <option value="no">不上火</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="timeFilter" style={{color: '#333'}}>烹饪时间：</label>
            <select 
              id="timeFilter" 
              value={timeFilter} 
              onChange={(e) => setTimeFilter(e.target.value)}
            >
              <option value="all">不限</option>
              <option value="短">短</option>
              <option value="中">中</option>
              <option value="长">长</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="cuisineFilter" style={{color: '#333'}}>菜系：</label>
            <select 
              id="cuisineFilter" 
              value={cuisineFilter} 
              onChange={(e) => setCuisineFilter(e.target.value)}
            >
              <option value="all">不限</option>
              <option value="川菜">川菜</option>
              <option value="新式粤菜">新式粤菜</option>
              <option value="日料/寿司">日料/寿司</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="typeFilter" style={{color: '#333'}}>类型：</label>
            <select 
              id="typeFilter" 
              value={typeFilter} 
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="all">不限</option>
              <option value="荤菜">荤菜</option>
              <option value="蔬菜">蔬菜</option>
              <option value="汤品">汤品</option>
            </select>
          </div>
        </form>
      </div>
      
      {/* 添加按钮 */}
      <button className="add-button" onClick={handleAdd}>添加新菜品</button>
      
      {/* 菜品列表 */}
      <div className="menu-list">
        <h2  style={{color: '#333'}}>菜品列表 ({filteredFoods.length})</h2>
        {filteredFoods.length === 0 ? (
          <p>没有找到符合条件的菜品</p>
        ) : (
          <div className="food-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
            {filteredFoods.map((food) => (
              <div key={food.id} className="food-card">
                <h3>{food.name}</h3>
                <p><strong>菜系：</strong>{food.cuisine}</p>
                <p><strong>是否上火：</strong>{food.isHot ? '是' : '否'}</p>
                <p><strong>烹饪时间：</strong>{food.time}</p>
                <p><strong>类型：</strong>{food.type}</p>
                <p><strong>食材：</strong>{food.ingredients}</p>
                <p><strong>描述：</strong>{food.description}</p>
                <div className="action-buttons" style={{display: 'flex', gap: '12px', marginTop: '16px'}}>
                  <button onClick={() => handleEdit(food)} style={{padding: '6px 12px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px'}}>编辑</button>
                  <button onClick={() => handleDelete(food.id)} style={{padding: '6px 12px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px'}}>删除</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* 弹窗组件 */}
      {showAddModal && (
        <div className="modal-overlay" style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000}}>
          <div className="modal-content" style={{backgroundColor: 'white', padding: '24px', borderRadius: '8px', width: '500px', maxWidth: '90%', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'}}>
            <div style={{borderBottom: '1px solid #eee', paddingBottom: '16px', marginBottom: '24px'}}>
              <h2 style={{margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#333'}}>{editingFood.id ? '编辑菜品' : '添加新菜品'}</h2>
            </div>
            <form>
              <div style={{display: 'flex', gap: '24px', marginBottom: '24px'}}>
                <div style={{flex: 1}}>
                  <label htmlFor="name" style={{color: '#333', display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500'}}>菜品名称：</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={editingFood.name} 
                    onChange={(e) => setEditingFood({...editingFood, name: e.target.value})}
                    style={{width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px'}}
                  />
                </div>
                
                <div style={{flex: 1}}>
                  <label htmlFor="cuisine" style={{color: '#333', display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500'}}>菜系：</label>
                  <select 
                    id="cuisine" 
                    value={editingFood.cuisine} 
                    onChange={(e) => setEditingFood({...editingFood, cuisine: e.target.value})}
                    style={{width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px'}}
                  >
                    <option value="川菜">川菜</option>
                    <option value="新式粤菜">新式粤菜</option>
                    <option value="日料/寿司">日料/寿司</option>
                  </select>
                </div>
              </div>
              
              <div style={{display: 'flex', gap: '16px', marginBottom: '24px'}}>
                <div style={{flex: 1}}>
                  <label htmlFor="isHot" style={{color: '#333', display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500'}}>是否上火：</label>
                  <select 
                    id="isHot" 
                    value={editingFood.isHot.toString()} 
                    onChange={(e) => setEditingFood({...editingFood, isHot: e.target.value === 'true'})}
                    style={{width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px'}}
                  >
                    <option value="false">否</option>
                    <option value="true">是</option>
                  </select>
                </div>
                
                <div style={{flex: 1}}>
                  <label htmlFor="time" style={{color: '#333', display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500'}}>烹饪时间：</label>
                  <select 
                    id="time" 
                    value={editingFood.time} 
                    onChange={(e) => setEditingFood({...editingFood, time: e.target.value})}
                    style={{width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px'}}
                  >
                    <option value="短">短</option>
                    <option value="中">中</option>
                    <option value="长">长</option>
                  </select>
                </div>
                
                <div style={{flex: 1}}>
                  <label htmlFor="type" style={{color: '#333', display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500'}}>类型：</label>
                  <select 
                    id="type" 
                    value={editingFood.type} 
                    onChange={(e) => setEditingFood({...editingFood, type: e.target.value})}
                    style={{width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px'}}
                  >
                    <option value="荤菜">荤菜</option>
                    <option value="蔬菜">蔬菜</option>
                    <option value="汤品">汤品</option>
                  </select>
                </div>
              </div>
              
              <div style={{marginBottom: '24px'}}>
                <label htmlFor="ingredients" style={{color: '#333', display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500'}}>食材：</label>
                <input 
                  type="text" 
                  id="ingredients" 
                  value={editingFood.ingredients} 
                  onChange={(e) => setEditingFood({...editingFood, ingredients: e.target.value})}
                  placeholder="请输入食材"
                  style={{width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px'}}
                />
              </div>
              
              <div style={{marginBottom: '32px'}}>
                <label htmlFor="description" style={{color: '#333', display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500'}}>描述：</label>
                <textarea 
                  id="description" 
                  value={editingFood.description} 
                  onChange={(e) => setEditingFood({...editingFood, description: e.target.value})}
                  placeholder="请输入描述"
                  rows={3}
                  style={{width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px', resize: 'vertical'}}
                ></textarea>
              </div>
              
              <div style={{display: 'flex', gap: '16px', justifyContent: 'flex-end'}}>
                <button type="button" onClick={() => {
                  handleSave()
                  setShowAddModal(false)
                }} style={{padding: '10px 20px', backgroundColor: '#2E7D32', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: '500', transition: 'background-color 0.2s'}}>保存</button>
                <button type="button" onClick={() => {
                  handleCancel()
                  setShowAddModal(false)
                }} style={{padding: '10px 20px', backgroundColor: '#C62828', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: '500', transition: 'background-color 0.2s'}}>取消</button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* 删除确认弹窗 */}
      {showDeleteConfirm && (
        <div className="modal-overlay" style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000}}>
          <div className="modal-content" style={{backgroundColor: 'white', padding: '24px', borderRadius: '8px', width: '400px', maxWidth: '90%', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'}}>
            <h2 style={{margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#333', marginBottom: '16px'}}>确认删除</h2>
            <p style={{marginBottom: '24px', color: '#666'}}>您确定要删除这个菜品吗？此操作不可撤销。</p>
            <div style={{display: 'flex', gap: '16px', justifyContent: 'flex-end'}}>
              <button type="button" onClick={cancelDelete} style={{padding: '8px 16px', backgroundColor: '#757575', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px'}}>取消</button>
              <button type="button" onClick={confirmDelete} style={{padding: '8px 16px', backgroundColor: '#D32F2F', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px'}}>确认删除</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuEditor