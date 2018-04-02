import React, {Component} from 'react';

import MainContainer from './MainContainer';
import ProjectsPanel from './ProjectsPanel';
import TeamsPanel from './TeamsPanel';
import EmployeesPanel from './EmployeesPanel';

class Overview extends Component {
    render(){
        return(
            <MainContainer sidebar="Overview">
                <ProjectsPanel title="Projects" dataSource="https://radiant-lake-28462.herokuapp.com/projects" />
                <TeamsPanel title="Teams" dataSource="https://radiant-lake-28462.herokuapp.com/teams" />
                <EmployeesPanel title="Employees" dataSource="https://radiant-lake-28462.herokuapp.com/employees" />
            </MainContainer>
        );
    }
}

export default Overview; 