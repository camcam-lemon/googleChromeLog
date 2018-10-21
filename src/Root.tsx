import React from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import VisitedIcon from '@material-ui/icons/visibility';

interface Chrome {
    id: number;
    last_visit_time: number;
    typed_count: number;
    visit_count: number;
    url: string;
    title: string;
    hidden: number;
}

interface State {
    chrome: Chrome[];
}

class Root extends React.Component<{}, State> {
    state = {
        chrome: [],
    };

    openSite = url => () => window.open(url, 'newtab');

    async componentDidMount() {
        const res = await fetch('http://localhost:9878/history/googleChrome');
        const { data: chrome } = await res.json();
        this.setState({ chrome });
    }

    render() {
        return (
            <Container>
                <List>
                    {this.state.chrome.map((log: Chrome) => (
                        <ListItem
                            key={log.id}
                            role={undefined}
                            button
                            dense
                            onClick={this.openSite(log.url)}
                        >
                            <Badge badgeContent={log.visit_count} color="primary">
                                <VisitedIcon />
                            </Badge>
                            <ListItemText primary={log.title} />
                        </ListItem>
                    ))}
                </List>
            </Container>
        );
    }
}

const Container = styled.div<{}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
Container.displayName = 'Container';

export default Root;
