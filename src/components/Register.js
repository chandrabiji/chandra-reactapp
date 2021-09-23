import React, { Component } from 'react'

export class Register extends Component {

   constructor() {
       super();
       this.state= {
           username:'',
           password:'',
           cpassword:''
       }
       this.username = this.username.bind(this);
       this.password = this.password.bind(this);
       this.cpassword = this.cpassword.bind(this);
       this.handleSubmit=this.handleSubmit.bind(this);

   }
   username(event) {
    this.setState({username: event.target.value});
  }
    password(event) {
       this.setState({password: event.target.value});
      }
      cpassword(event) {
          this.setState({cpassword: event.target.value});
      }
      handleSubmit(event){
          event.preventDefault();
          if(this.state.password===this.state.cpassword){
            alert("calling submit method");
            alert(this.state.username+" "+this.state.password);
            console.log(this.state.username+" "+this.state.password);
          }else{
              alert("Password and Confirmed Password not matching");
          }

      }
    render() {
        return (
            <div className="container">
                <h1>Register Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label name="username" className="form-label">Enter User Name</label>
                        <input type="text" className="form-control" id="username" name="username"  onChange={this.username} />
                    </div>
                    <div className="mb-3">
                        <label name="password" className="form-label">Enter Password</label>
                        <input type="text" className="form-control" id="password" name="password"  onChange={this.password} />
                    </div>
                    <div className="mb-3">
                        <label name="cpassword" className="form-label">Confirmed Password</label>
                        <input type="text" className="form-control" id="cpassword" name="cpassword"  onChange={this.cpassword} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Register
