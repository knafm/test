import {useState} from 'react';
import React from 'react';
import './tablist.css';

export default (props) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const {tabInfo} = props;

    const onTabClick = (id) => (e) => setSelectedTab(id);
    const onListKeyUp = ({which}) => {
        if (which === 37) {
            if (selectedTab > 0) setSelectedTab(selectedTab - 1)
        }
        if (which === 39) {
            if (selectedTab <= setSelectedTab.length) setSelectedTab(selectedTab + 1)
        }
    }

    const tabs = tabInfo.map(({name}, index) => <button
            id={index}
            className={`tablist__tab ${selectedTab === index ? 'tablist__tab--selected' : ''}`}
            onClick={onTabClick(index)}
            role="tab"
            aria-controls="panel1"
            aria-expanded={selectedTab === index}
            tabIndex={selectedTab === index ? '0' : '-1'}
        >{name}
        </button>
    )
    const tabContent = tabInfo[selectedTab].content;
    return (
        <>
            <div role="tablist" className="tablist" onKeyUp={onListKeyUp}>
                {tabs}
            </div>
            <div tabIndex={0}>
                {tabContent}
            </div>
        </>

    )
}
