import React from 'react';
import { NavMenu } from './navMenu';


export class Layout extends React.Component {
    render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-3'>
                {/* Navmenu and Header placement to be dicussed */}

                </div>
                <div className='col-sm-9'>
                    { this.props.children }
                </div>

            </div>
        </div>;
    }
}
