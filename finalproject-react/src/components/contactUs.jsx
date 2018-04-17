import React from 'react';
import PropTypes from 'prop-types';
// import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
// import { fetchSubmit, newSubmit } from '../actions/submitActions';

class Submit extends React.Component {
    componentWillMount() {
        this.props.fetchSubmit();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.newSubmit) {
            this.props.Submit.unshift(nextProps.newSubmit);
        }
    }
    onChange(e) {
        this.setState(...state, { [e.target.name]: e.target.vaule });
    }
    onSubmit(e) {
        e.preventDefault();

        let submit = {
            fullname: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
    };
    render() {
        // let submitItems = this.props.submit.map((submit, i) => (
        //     <div key={i}>
        //     </div>
        // ));

        return (
            <tbody>
                <form onSubmit={this.onSubmit}>
                    <h1>Contact Us</h1>
                    <div className="form-group">
                        <label className="control-label">Full Name</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.name}
                            type="text"
                            name="name"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label className="control-label">E-mail</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.email}
                            type="text"
                            name="email"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Message</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.message}
                            type="text"
                            name="message"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </tbody>
        );
    };
}

//keep just in case

Submit.propTypes = {
    fetchSubmit: PropTypes.func.isRequired,
    Submit: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    Submit: state.submit.items,
    newSubmit: state.Submit.items

});

const mapDispatchToProps = dispatch => {
    return dispatch;
}

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
