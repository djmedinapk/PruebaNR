import React from 'react';

class Pr1NerdletNerdlet extends React.Component {
    state={
        color:1,
    }

    componentDidMount() {
        this.changeColor();
    }

    changeColor(){
        setTimeout(() => {
            let { color } = this.state;
            color += 1;
            color>3 ? color = 1 :'';
            this.setState({
                color,
            })
            this.changeColor();
        }, 2000);
    }
    
    render() {
        const { color } = this.state;
        return<div>
                <form>
                    <div className={color == 2?'form-control form-control-warning': '' + color == 3?'form-control form-control-error': '' + color == 1?'form-control form-control-success': ''}>
                        <input className="input-message" type="text" placeholder="Message to Update"></input>
                    </div>
                </form>
            </div>;
    }
}

export default Pr1NerdletNerdlet;
