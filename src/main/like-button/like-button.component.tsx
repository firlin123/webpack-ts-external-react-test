import * as React from 'react';
import './like-button.component.css';

type State = {
    liked: boolean;
}
type Props = {};

export class LikeButtonComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { liked: false };
    }

    render(): string | JSX.Element {
        const className: string = this.state.liked ? 'like-button liked' : 'like-button';
        const text: string = this.state.liked ? 'Dislike' : 'Like';
        const onClick: () => void = () => this.setState({ liked: !(this.state.liked) });
        return <button className={className} onClick={onClick}>{text}</button>;
    }
}