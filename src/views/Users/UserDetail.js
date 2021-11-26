import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { addNewUser, updateUser, usersSelector } from '../../slices/UserSlice';
import { useAppDispatch } from '../../store';

export const UserDetail = ({ setShowModal, user, setUser, isNew }) => {
  const dispatch = useAppDispatch();
  const { cloneData } = useSelector(usersSelector);
  const [required, setRequired] = useState({
    name: !isNew,
    email: !isNew,
  });

  useEffect(() => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (user.email.trim().length === 0 || !emailRegex.test(user.email.toLowerCase())) {
      setRequired({ ...required, email: false });
    } else {
      setRequired({ ...required, email: true });
    }
  }, [user.email]);

  useEffect(() => {
    if (user.name.trim().length === 0) {
      setRequired({ ...required, name: false });
    } else {
      setRequired({ ...required, name: true });
    }
  }, [user.name]);

  const handleUpdateUser = () => {
    const demoData = [...cloneData];
    const demoDataIndex = demoData.indexOf(demoData.find(f => f.id === user.id));
    demoData[demoDataIndex] = user;
    setShowModal(false);
    Swal.fire({
      icon: 'success',
      title: 'User updated',
    });
    dispatch(updateUser(demoData));
  };
  const handleNewUser = () => {
    setShowModal(false);
    Swal.fire({
      icon: 'success',
      title: 'User added.',
    });
    dispatch(addNewUser([...cloneData, user]));
  };

  return (
    <>
      <div className="col-md-12 row mb-3 mt-4">
        <label className="control-label col-md-2 mt-2">
          Name
        </label>
        <div className="col-md-10">
          <input
            className="form-control"
            type="text"
            required
            placeholder="name"
            style={{ borderColor: !required.name && 'red' }}
            onChange={e => setUser({ ...user, name: e.target.value })}
            value={user.name}
          />
          {!required.name && (
          <span style={{ fontSize: 13, color: 'red' }}>*Please input your username!</span>
          )}
        </div>
      </div>
      <div className="col-md-12 row mb-3">
        <label className="control-label col-md-2 mt-2">
          Email
        </label>
        <div className="col-md-10">
          <input
            className="form-control"
            type="text"
            placeholder="email"
            style={{ borderColor: !required.email && 'red' }}
            onChange={e => setUser({ ...user, email: e.target.value })}
            value={user.email}
          />
          {!required.email && (
          <span style={{ fontSize: 13, color: 'red' }}>*Email is empty or incorrect!</span>
          )}
        </div>
      </div>
      <div className="col-md-12 row mb-3">
        <label className="control-label col-md-2 mt-2">
          Username
        </label>
        <div className="col-md-10">
          <input
            className="form-control"
            type="text"
            placeholder="username"
            onChange={e => setUser({ ...user, username: e.target.value })}
            value={user.username}
          />
        </div>
      </div>
      <div className="col-md-12 row mb-3">
        <label className="control-label col-md-2 mt-2">
          City
        </label>
        <div className="col-md-10">
          <input
            className="form-control"
            type="text"
            placeholder="address"
            onChange={e => setUser({ ...user, address: { ...user.address, city: e.target.value } })}
            value={user.address.city}
          />
        </div>
      </div>
      <div className="d-flex justify-content-end mr-4">
        <button
          className="btn btn-outline-danger px-3 mr-3"
          type="button"
          onClick={() => setShowModal(false)}
        >
          Cancel

        </button>
        <button disabled={!required.name || !required.email} onClick={() => (isNew ? handleNewUser() : handleUpdateUser())} className="btn btn-success px-3 mr-4" type="button">Submit</button>
      </div>
    </>
  );
};

UserDetail.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
  setShowModal: PropTypes.func.isRequired,
  isNew: PropTypes.bool.isRequired,
};
UserDetail.defaultProps = {
  user: {},
  setUser: () => {},
};
