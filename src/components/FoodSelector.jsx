import React, { useState, useEffect } from 'react'
import foodOptions from '../data/foods'

// 食物数据从配置文件导入

const FoodSelector = () => {
  // 状态管理
  const [isHot, setIsHot] = useState('all')
  const [time, setTime] = useState('all')
  const [cuisine, setCuisine] = useState('all')
  const [people, setPeople] = useState('2')
  const [topN, setTopN] = useState('5') // 控制推荐个数
  const [recommendations, setRecommendations] = useState([])
  const [foods, setFoods] = useState(foodOptions)

  // 从localStorage读取数据
  useEffect(() => {
    const savedFoods = localStorage.getItem('foods')
    if (savedFoods) {
      try {
        const parsedFoods = JSON.parse(savedFoods)
        setFoods(parsedFoods)
      } catch (error) {
        console.error('Failed to parse saved foods:', error)
      }
    }
  }, [])

  // 计算菜品相似度
  const calculateSimilarity = (food1, food2) => {
    let similarity = 0
    
    // 菜系相同
    if (food1.cuisine === food2.cuisine) {
      similarity += 0.3
    }
    
    // 是否上火相同
    if (food1.isHot === food2.isHot) {
      similarity += 0.2
    }
    
    // 烹饪时间相同
    if (food1.time === food2.time) {
      similarity += 0.2
    }
    
    // 类型相同
    if (food1.type === food2.type) {
      similarity += 0.1
    }
    
    // 食材有重叠
    const ingredients1 = food1.ingredients.split('、')
    const ingredients2 = food2.ingredients.split('、')
    const commonIngredients = ingredients1.filter(ing => ingredients2.includes(ing))
    similarity += commonIngredients.length * 0.05
    
    return Math.min(similarity, 1)
  }

  // 生成单个推荐套餐
  const generateRecommendation = (filtered, meatCount, vegCount) => {
    // 分离荤菜和蔬菜
    const meats = filtered.filter(food => food.type === '荤菜')
    const veggies = filtered.filter(food => food.type === '蔬菜')
    
    // 为每个菜品计算相似度分数（这里简化处理，使用随机分数）
    const scoredMeats = meats.map(meat => ({
      food: meat,
      score: Math.random()
    })).sort((a, b) => b.score - a.score)
    
    const scoredVeggies = veggies.map(veg => ({
      food: veg,
      score: Math.random()
    })).sort((a, b) => b.score - a.score)
    
    // 确保至少有一个蔬菜
    let selected = []
    
    // 添加蔬菜
    if (scoredVeggies.length > 0) {
      selected = selected.concat(scoredVeggies.slice(0, vegCount).map(item => item.food))
    }
    
    // 添加荤菜
    if (scoredMeats.length > 0) {
      selected = selected.concat(scoredMeats.slice(0, meatCount).map(item => item.food))
    }
    
    // 如果不够，从剩余的食物中补充
    if (selected.length < meatCount + vegCount) {
      const remaining = filtered.filter(food => !selected.includes(food))
      const scoredRemaining = remaining.map(food => ({
        food: food,
        score: Math.random()
      })).sort((a, b) => b.score - a.score)
      selected = selected.concat(scoredRemaining.slice(0, meatCount + vegCount - selected.length).map(item => item.food))
    }
    
    return selected
  }

  // 生成推荐菜品列表
  const generateRecommendations = (filtered, meatCount, vegCount, topN) => {
    const recommendations = []
    
    for (let i = 0; i < topN; i++) {
      const recommendation = generateRecommendation(filtered, meatCount, vegCount)
      recommendations.push(recommendation)
    }
    
    return recommendations
  }

  // 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // 根据条件过滤食物
    let filtered = foods.filter(food => {
      const matchHot = isHot === 'all' || (isHot === 'yes' ? food.isHot : !food.isHot)
      const matchTime = time === 'all' || food.time === time
      const matchCuisine = cuisine === 'all' || food.cuisine === cuisine
      return matchHot && matchTime && matchCuisine
    })
    
    // 根据人数确定推荐菜品数量
    let meatCount = 0
    let vegCount = 0
    
    switch(people) {
      case '1':
        meatCount = 1
        vegCount = 1
        break
      case '2':
        meatCount = 2
        vegCount = 1
        break
      case '3':
        meatCount = 2
        vegCount = 1
        break
      case '4':
        meatCount = 3
        vegCount = 1
        break
      case '5':
        meatCount = 3
        vegCount = 2
        break
      default:
        meatCount = 2
        vegCount = 1
    }
    
    // 生成多个推荐选项
    const newRecommendations = generateRecommendations(filtered, meatCount, vegCount, parseInt(topN))
    setRecommendations(newRecommendations)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} style={{display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-end'}}>
        <div className="form-group" style={{flex: '1 1 200px'}}>
          <label htmlFor="isHot" style={{color: '#213547'}}>是否上火：</label>
          <select 
            id="isHot" 
            value={isHot} 
            onChange={(e) => setIsHot(e.target.value)}
          >
            <option value="all">不限</option>
            <option value="yes">上火</option>
            <option value="no">不上火</option>
          </select>
        </div>
        
        <div className="form-group" style={{flex: '1 1 200px'}}>
          <label htmlFor="time" style={{color: '#213547'}}>烹饪时间：</label>
          <select 
            id="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="all">不限</option>
            <option value="短">短（30分钟内）</option>
            <option value="中">中（30-60分钟）</option>
            <option value="长">长（60分钟以上）</option>
          </select>
        </div>
        
        <div className="form-group" style={{flex: '1 1 200px'}}>
          <label htmlFor="cuisine" style={{color: '#213547'}}>菜系：</label>
          <select 
            id="cuisine" 
            value={cuisine} 
            onChange={(e) => setCuisine(e.target.value)}
          >
            <option value="all">不限</option>
            <option value="川菜">川菜</option>
            <option value="新式粤菜">新式粤菜</option>
            <option value="日料/寿司">日料/寿司</option>
          </select>
        </div>
        
        <div className="form-group" style={{flex: '1 1 150px'}}>
          <label htmlFor="people" style={{color: '#213547'}}>人数：</label>
          <select 
            id="people" 
            value={people} 
            onChange={(e) => setPeople(e.target.value)}
          >
            <option value="1">1人</option>
            <option value="2">2人</option>
            <option value="3">3人</option>
            <option value="4">4人</option>
            <option value="5">5人以上</option>
          </select>
        </div>
        
        <div className="form-group" style={{flex: '1 1 150px'}}>
          <label htmlFor="topN" style={{color: '#213547'}}>推荐个数：</label>
          <select 
            id="topN" 
            value={topN} 
            onChange={(e) => setTopN(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        
        <div className="form-group" style={{flex: '0 0 auto'}}>
          <button type="submit" style={{padding: '8px 24px'}}>开始选择</button>
        </div>
      </form>
      
      <div className="results">
        <h2 style={{color: '#333'}}>推荐菜品：</h2>
        {recommendations.length === 0 ? (
          <p style={{color: '#333'}}>请选择条件后点击搜索</p>
        ) : (
          <div className="recommendation-list">
            {recommendations.map((recommendation, recIndex) => (
              <div key={recIndex} className="recommendation-item">
                <h3>推荐选项 {recIndex + 1}</h3>
                <div className="food-grid" style={{ gridTemplateColumns: `repeat(${recommendation.length}, 1fr)` }}>
                  {recommendation.map((food, foodIndex) => (
                    <div key={foodIndex} className="food-card">
                      <h4>{food.name}</h4>
                      <p><strong>菜系：</strong>{food.cuisine}</p>
                      <p><strong>是否上火：</strong>{food.isHot ? '是' : '否'}</p>
                      <p><strong>烹饪时间：</strong>{food.time === '短' ? '30分钟内' : food.time === '中' ? '30-60分钟' : '60分钟以上'}</p>
                      <p><strong>食材：</strong>{food.ingredients}</p>
                      <p><strong>描述：</strong>{food.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default FoodSelector