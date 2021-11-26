import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { ModalTemplate } from '../../components/Modal';
import { customStyles, DATATABLE } from '../../utils/DataTable';
import { cloneAllData, deleteUser, fetchGetUsers, usersSelector } from '../../slices/UserSlice';

import { useAppDispatch } from '../../store';
import { UserDetail } from './UserDetail';
import './Users.css';

export const Users = () => {
  let lastId = 0;
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const { data, cloneData } = useSelector(usersSelector);
  const [isNew, setIsNew] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    address: {},
    id: 0,
    username: '',
  });

  const onDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        dispatch(deleteUser(cloneData.filter(f => f.id !== id)));
        Swal.fire(
          'Deleted!',
          'User has been deleted.',
          'success',
        );
      }
    });
  };
  const onDetail = id => {
    setIsNew(false);
    setUser(cloneData.find(f => f.id === id));
    setShowModal(true);
  };
  useEffect(() => {
    dispatch(fetchGetUsers());
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      dispatch(cloneAllData());
    }
  }, [data]);

  const actionsMemo = React.useMemo(() => (
    <button
      onClick={() => {
        setIsNew(true);
        setShowModal(true);
      }}
      className="btn btn-primary px-5"
      type="button"
    >
      Add new
    </button>
  ), []);

  useEffect(() => {
    if (showModal && isNew) {
      lastId = cloneData[cloneData.length - 1].id;
      setUser({
        name: '',
        email: '',
        address: {
          city: '',
        },
        id: lastId + 1,
        username: '',
      });
    }
  }, [showModal, isNew]);

  return (
    <div className="users_container">
      <div className="users_datatable">
        <DataTable
          columns={DATATABLE.customer(onDetail, onDelete)}
          data={cloneData}
          pagination
          customStyles={customStyles}
          title="User List"
          // paginationRowsPerPageOptions={[5]}
          // paginationPerPage={5}
          actions={actionsMemo}
        />
      </div>
      <ModalTemplate visible={showModal} title="Users" headerText="Form">
        <UserDetail
          showModal={showModal}
          setShowModal={setShowModal}
          user={user}
          setUser={setUser}
          isNew={isNew}
        />
      </ModalTemplate>
    </div>
  );
};
