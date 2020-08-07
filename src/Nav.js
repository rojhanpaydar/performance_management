import React, { Component } from "react";

class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="navFlexContainer">
                        <li>Diagnostic Tool</li>
                        <li>Logged in as General user</li>
                        <li><button><i class="fas fa-sliders-h"></i></button></li>
                        <li><button><i class="fas fa-download"></i></button></li>
                        <li><button><i class="fas fa-print"></i></button></li>
                        <li><button><i class="far fa-question-circle"></i></button></li>
                        <li><button><i class="fas fa-sign-out-alt"></i></button></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav; 