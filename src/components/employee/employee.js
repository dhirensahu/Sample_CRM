
import React from 'react';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}


let data = [
  {
    name:"dhiren",
    age:31,
    address:"Bhubaneswar",
    mob:13656162004
  },
  {
    name:"dhiren",
    age:31,
    address:"Bhubaneswar",
    mob:13656162004
  },
  {
    name:"dhiren",
    age:31,
    address:"Bhubaneswar",
    mob:13656162004
  }
]


const EmployeeComponent = React.createClass({
  render: function () {
    return (
      <div>
        <Collapse accordion>
          <Panel header="Employee 1" key="1">
            <p>Age: 32</p>
            <p>Address: Bhubanesar</p>
          </Panel>
          <Panel header="Employee 2" key="2">
            <p>Age: 30</p>
            <p>Address: Shanghai</p>
          </Panel>
          <Panel header="Employee 3" key="3">
            <p><p>Age: 22</p>
              <p>Address: Beijig</p></p>
          </Panel>
        </Collapse>

      </div>
    )
  }
});

export default EmployeeComponent;