import { Server } from './classes/server';
import dotEnv from 'dotenv';

dotEnv.config();

const server = new Server();
server.start();