import React, { Component } from 'react';
import A from './A';

class B extends Component {
  render() {
    return (
      <div>
        我的名字是：{this.props.name}
        我的年龄是：{this.props.age}
        我的性别是：{this.props.sex}

        <img src={require('../images/B.png')} alt=""/>

      </div>
    );
  }
}
// export default A(B,'提示');
export default A('提示',B);