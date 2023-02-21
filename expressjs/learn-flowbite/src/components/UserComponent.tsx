import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { User } from "@interfaces/User";
import { HttpClient } from "../utils/HttpClient";
import { AxiosResponse } from "axios/index";
import { Link } from "react-router-dom";

export default function() {
  const httpClient: HttpClient = new HttpClient();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    httpClient.get("users")?.then((res: AxiosResponse) => {
      console.log(res.status, res.data);
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
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
              <Table.Row key={index.toString()} className="bg-white dark:border-gray-700 dark:bg-gray-800">
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