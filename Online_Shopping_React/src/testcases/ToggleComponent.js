import React from 'react';
export default class ToggleComponent extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                isShowText: true
            }
        }
        handleClick = () => {
            this.setState(({ isShowText }) => ({
                isShowText: !isShowText
            }));
        }
        render() {
            const { isShowText } = this.state;
            return ( <
                div > {
                    isShowText && <div> This will be toggled </div>} <button onClick = { this.handleClick } > { isShowText ? 'Hide' : 'Show' } 
                    </button> 
                    </div>
                );
            }
        }