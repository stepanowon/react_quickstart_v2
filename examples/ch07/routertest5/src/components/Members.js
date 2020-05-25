import React from 'react';

const Members = (props) => {

    const goHome = () => {
      if (window.confirm('정말로 홈으로 이동할까요?') === true) {
        props.history.push('/');
      }  
    }

    let imgstyle={ width: 90, height:80 }
    let list = props.members.map((member)=> {
      return (
        <div className="col-sm-6 col-md-4 col-lg-3" key={member.name}>
          <img src={member.photo} className="img-thumbnail"
            alt={member.name} style={imgstyle} /><br />
          <h6>{ member.name }</h6><br /><br/>
        </div>
      )
    })
    return (
      <div>
        <h2 className="m-4">Members</h2>
        <div className="container">
          <div className="row">
            {list}
          </div>
        </div>
        <button className="btn btn-secondary" 
             onClick={goHome} >
             Home으로 이동
        </button>
      </div>
    )
};

export default Members;