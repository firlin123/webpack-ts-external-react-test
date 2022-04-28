import * as React from "react";
import { LikeButtonComponent } from "./like-button/like-button.component";
import './main.component.css';

type Props = {};
type State = {};

export class MainComponent extends React.Component<Props, State> {
    render() {
        return <div className="main">
            <LikeButtonComponent />
            <LikeButtonComponent />
            <LikeButtonComponent />
            <LikeButtonComponent />
        </div>;
    }
}