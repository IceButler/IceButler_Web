import React, { useState } from 'react';
import foodEdit from "assets/images/food/edit.png";
import './FoodManage.css'
import axios from 'axios';

const Tr = ({ info, checkHandler, checkedStatusList, setEdit }) => {
  const rows = [];
  const maxRows = 16;

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedFoodName, setEditedFoodName] = useState('');
  const [editFoodName, setEditFoodName] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [editCategory, setEditCategory] = useState(false);

  const categoryOptions = [
    { value: "육류", label: "육류" },
    { value: "과일", label: "과일" },
    { value: "채소", label: "채소" },
    { value: "음료", label: "음료" },
    { value: "수산물", label: "수산물" },
    { value: "반찬", label: "반찬" },
    { value: "조미료", label: "조미료" },
    { value: "가공식품", label: "가공식품" },
    { value: "기타", label: "기타" },
  ];

  const handleCategoryTdClick = (index, foodName, category) => {
    setSelectedCategory(category);
    setEditingIndex(index);
    setEditedFoodName(foodName);
    setEditFoodName(false);
    setEditCategory(true);
  };

  const postFoodImgUrl = (data, file) => {
    console.log(data.presignedUrl);
    console.log(file);
  
    const formData = new FormData();
    formData.append('file', file);
  
    axios.put(data.presignedUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Content-Type 헤더 설정
      }
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const getFoodImgUrl = (e) => {
    var file = e.target.files[0];
    console.log(file);
    var type = file.type.split("/");
    console.log(type[1]);
    axios.get('presigned-url', {
      params: {
        ext: type[1],
        dir: "food"
      }
    }).then((res) => {
      console.log(res);
      postFoodImgUrl(res.data, file);
    }).catch((error) => {
      console.log(error);
    })
  }

  const handleFoodNameTdClick = (index, foodName, category) => {
    setSelectedCategory(category);
    setEditingIndex(index);
    setEditedFoodName(foodName);
    setEditFoodName(true);
    setEditCategory(false);
  };

  const foodNameChange = (e) => {
    setEditedFoodName(e.target.value);
  };

  const handleEditClick = (index, foodName) => {
    setEditingIndex(index);
    setEditedFoodName(foodName);
  };

  const handleCategorySelect = (category, item) => {
    setSelectedCategory(category);
    handleSave(item, category);
  };

  const handleSave = (item, category) => {
    axios.patch(`/admin/foods/${item.foodIdx}`, {
      foodCategory: category,
      foodName: editedFoodName,
      foodImgKey: item.foodImgKey
    }).then((res) => {
      alert('성공적으로 수정되었습니다.');
    }).catch((error) => {
      console.error('HTTP 요청 실패:', error);
    });


    // 저장 후 편집 상태 초기화
    setEditingIndex(null);
    setEditedFoodName('');
    setEditFoodName(false)
    setSelectedCategory('');
    setEditCategory(false);
    setEdit(true);
  };



  const handleKeyDown = (e, item) => {
    if (e.key === 'Enter') {
      handleSave(item, item.foodCategory);
    }
  };


  for (let i = 0; i < maxRows; i = i + 2) {
    const item = info[i];
    const item2 = info[i + 1];
    rows.push(
      <tr key={i}>
        {item ? (
          <>
            <td width="5%"><input type="checkbox" checked={checkedStatusList[i]} onChange={(e) => checkHandler(item.foodIdx, i)} /></td>
            <td width="15%" >
              <form>
                <label className='foodImgBtn' for="chooseFile">
                  <img src={item.foodImgUrl} alt="food_img" />
                </label>
                <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onChange={(e) => getFoodImgUrl(e)} />
              </form>
            </td>

            <td
              width="15%"
              onClick={() => handleCategoryTdClick(item.foodIdx, item.foodName, item.foodCategory)}
            >
              {editingIndex === item.foodIdx && editCategory ? (
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    handleCategorySelect(e.target.value, item)
                  }}
                >
                  <option value={selectedCategory}>{selectedCategory}</option>
                  {categoryOptions
                    .filter((option) => option.value !== selectedCategory)
                    .map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                </select>
              ) : (
                <>
                  {item.foodCategory}
                  <img
                    className="foodEditImg"
                    src={foodEdit}
                    alt="food_search_img"
                  />
                </>
              )}
            </td>
            <td width="15%" onClick={() => handleFoodNameTdClick(item.foodIdx, item.foodName, item.foodCategory)}>
              {editingIndex === item.foodIdx && editFoodName ? (
                <input
                  type="text"
                  id="editInput"
                  value={editedFoodName}
                  onChange={foodNameChange}
                  onKeyDown={(e) => handleKeyDown(e, item)}
                  autoFocus
                />
              ) : (
                <>
                  {item.foodName}
                  <img
                    className="foodEditImg"
                    src={foodEdit}
                    alt="food_search_img"
                    onClick={() => handleEditClick(i, item.foodName)}
                  // <img className = "foodEditImg" src={foodEdit} alt="food_search_img"/>
                  />
                </>
              )}
            </td>
          </>
        ) : (
          <>
            <td width="5%"></td>
            <td width="15%"></td>
            <td width="15%"></td>
            <td width="15%"></td>
          </>
        )}
        {item2 ? (
          <>
            <td width="5%"><input type="checkbox" checked={checkedStatusList[i + 1]} onChange={(e) => checkHandler(item2.foodIdx, i + 1)} /></td>
            <td width="15%">
              <form method="post" enctype="multipart/form-data">
                <label className='foodImgBtn' for="chooseFile">
                  <img src={item2.foodImgUrl} alt="food_img" />
                </label>
                <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onChange={(e) => getFoodImgUrl(e)} />
              </form>
            </td>
            <td
              width="15%"
              onClick={() => handleCategoryTdClick(item2.foodIdx, item2.foodName, item2.foodCategory)}
            >
              {editingIndex === item2.foodIdx && editCategory ? (
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    handleCategorySelect(e.target.value, item2)
                  }}
                >
                  <option value={selectedCategory}>{selectedCategory}</option>
                  {categoryOptions
                    .filter((option) => option.value !== selectedCategory)
                    .map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                </select>
              ) : (
                <>
                  {item2.foodCategory}
                  <img
                    className="foodEditImg"
                    src={foodEdit}
                    alt="food_search_img"
                  />
                </>
              )}
            </td>
            <td width="15%" onClick={() => handleFoodNameTdClick(item2.foodIdx, item2.foodName, item2.foodCategory)}>
              {editingIndex === item2.foodIdx && editFoodName ? (
                <input
                  type="text"
                  id="editInput"
                  value={editedFoodName}
                  onChange={foodNameChange}
                  onKeyDown={(e) => handleKeyDown(e, item2)}
                  autoFocus
                />
              ) : (
                <>
                  {item2.foodName}
                  <img
                    className="foodEditImg"
                    src={foodEdit}
                    alt="food_search_img"
                    onClick={() => handleEditClick(i, item2.foodName)}
                  // <img className = "foodEditImg" src={foodEdit} alt="food_search_img"/>
                  />
                </>
              )}
            </td>
          </>
        ) : (
          <>
            <td width="5%"></td>
            <td width="15%"></td>
            <td width="15%"></td>
            <td width="15%"></td>
          </>
        )}
      </tr>
    );

  }

  return <>{rows}</>;
};

export default Tr;