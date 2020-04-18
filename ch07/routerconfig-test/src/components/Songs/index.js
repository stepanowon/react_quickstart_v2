import { renderRoutes } from 'react-router-config'

const Songs = (props) => {
    return renderRoutes(props.route.routes);
};

export default Songs;