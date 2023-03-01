import React, { useEffect, useRef, useState } from "react";
import { Pagination, Table } from "flowbite-react";
import { User } from "@interfaces/User";
import { HttpClient } from "@utils/HttpClient";
import { AxiosResponse } from "axios/index";
import { Link } from "react-router-dom";

export default function UserComponent() {
  const httpClient: HttpClient = new HttpClient();
  const [users, setUsers] = useState([]);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if(dataFetchedRef.current) return;

    dataFetchedRef.current = true;
    httpClient.get("users")?.then((res: AxiosResponse) => {
      console.log("Fetching data", dataFetchedRef.current)
      if(res.status === 200){
        setUsers(res.data);
        dataFetchedRef.current = false;  
      }
    });
  }, []);

  const onPageChange = (event: any) => {
    console.log('Event: ', event)
    httpClient.get("users")?.then((res: AxiosResponse) => {
      if(res.status === 200){
        setUsers(res.data);
      }
    });
  }

  return (
    <div>
      <Pagination currentPage={1} onPageChange={$event => onPageChange($event)} showIcons={true} totalPages={10}/>
      <Table hoverable={true} striped={true}>
        <Table.Head>
          <Table.HeadCell>
            Username
          </Table.HeadCell>
          <Table.HeadCell>
            Password
          </Table.HeadCell>
          <Table.HeadCell>
            First Name
          </Table.HeadCell>
          <Table.HeadCell>
            Last Name
          </Table.HeadCell>
          <Table.HeadCell>
            Age
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            users.map((user: User, index) => (
              <Table.Row key={`_${index.toString()}`} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {user.username}
                </Table.Cell>
                <Table.Cell >
                  {user.password}
                </Table.Cell>
                <Table.Cell>
                  {user.firstName}
                </Table.Cell>
                <Table.Cell>
                  {user.lastName}
                </Table.Cell>
                <Table.Cell>
                  {user.age}
                </Table.Cell>
                <Table.Cell>
                  <Link to="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Edit
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    </div>
  );
};