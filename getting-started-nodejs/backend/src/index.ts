import {EndpointsConfig} from '@config/endpoints-config.js';
import {APP_ENDPOINTS} from "@endpoints/app-endpoints.js";

const server = EndpointsConfig.server;

server.use('/api/app', APP_ENDPOINTS);

server.listen(EndpointsConfig.port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${EndpointsConfig.port}`);
});
