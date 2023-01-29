import React from 'react';
import PaginatedTable from '../../components/PaginatedTable';
import AddCategory from './AddCategory';

const CategoryTable = () => {
  const data = [
    {
      id: '1',
      category: 'aaa',
      title: 'bbb',
      price: '1111',
      stock: '5',
      like_count: '2',
      status: '1',
    },
    {
      id: '2',
      category: 'ccc',
      title: 'ddd',
      price: '2222',
      stock: '7',
      like_count: '2',
      status: '1',
    },
    {
      id: '3',
      category: 'ccc',
      title: 'ddd',
      price: '2222',
      stock: '7',
      like_count: '2',
      status: '1',
    },
    {
      id: '4',
      category: 'ccc',
      title: 'ddd',
      price: '2222',
      stock: '7',
      like_count: '2',
      status: '1',
    },
  ];

  const dataInfo = [
    { field: 'id', title: '#' },
    { field: 'title', title: 'عنوان محصول' },
    { field: 'price', title: 'قیمت محصول' },
  ];

  const additionalElements = (itemId) => {
    console.log(itemId);
    return (
      <>
        <i
          className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip"
          title="زیرمجموعه"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        ></i>
        <i
          className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
          title="ویرایش دسته"
          data-bs-placement="top"
          data-bs-toggle="modal"
          data-bs-target="#add_product_category_modal"
        ></i>
        <i
          className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip"
          title="افزودن ویژگی"
          data-bs-placement="top"
          data-bs-toggle="modal"
          data-bs-target="#add_product_category_attr_modal"
        ></i>
        <i
          className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
          title="حذف دسته"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        ></i>
      </>
    );
  };

  const additionField = {
    title: 'عملیات',
    elements: (itemId) => additionalElements(itemId),
  };

  const searchParams = {
    title: 'جستجو',
    placeholder: 'قسمتی از عنوان را وارد کنید',
    searchField: 'title',
  };

  return (
    <>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        searchParams={searchParams}
        numOfPage={2}
      >
        <AddCategory />
      </PaginatedTable>
    </>
  );
};

export default CategoryTable;
