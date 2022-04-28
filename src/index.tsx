import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import { Root } from 'react-dom/client';
import { MainComponent } from './main/main.component';

const domContainer: HTMLElement = document.getElementById('root') as HTMLElement;
const root: Root = ReactDOM.createRoot(domContainer);
root.render(<MainComponent />);