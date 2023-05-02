import React, { useEffect, useState } from 'react';
import UserList from './';

const UserList = () => {
	useEffect(() => {}, []);

	return (
		<div>
			<h1>User List</h1>
			<ul>{/* ADD JSX AND PASS DOWN PROPS TO UserList */}</ul>
		</div>
	);
};

export default UserList;
