import React from 'react';

export default class CollapsePanel extends React.Component {
    render() {
        return (
            <div className="collapse-panel">
                <h1>
                    <a
                        onClick={this.toggleCollapsed}
                        className="collapse-panel-toggle"
                    >
                        {this.props.title}
                    </a>
                </h1>
                {this.renderChildren()}
            </div>
        );
    }

    renderChildren() {
        if (this.state.isCollapsed) {
            return null;
        }

        return (
            <div className="collapse-panel-content">
                {this.props.children}
            </div>
        );
    }

    state = {
        isCollapsed: true
    };

    toggleCollapsed = () => {
        this.setState(prevState => {
            return { isCollapsed: !prevState.isCollapsed };
        });
    };
}
