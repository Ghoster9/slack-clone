import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Ahmad Zaky </h2>
                    <h3>
                    <FiberManualRecordIcon />
                        Ahmad Zaky
                    </h3>
                    </div>
                <CreateIcon />
                <SidebarOption icon={} title="Threads"/>
                <SidebarOption />
                <SidebarOption />
                <SidebarOption />
                <SidebarOption />
                <SidebarOption />
                <SidebarOption />
                <SidebarOption />
                <SidebarOption />
            </div>
        </div>
    );
}

export default Sidebar;
