import {
    SubscribeMessage,
    WebSocketGateway,
    ConnectedSocket,
    MessageBody,
    WebSocketServer,
} from '@nestjs/websockets';
import { MyServer, MySocket } from './socket.dto';
import { Config } from '../../../config/configuration';
// import { RoomsService } from '../rooms.service';

@WebSocketGateway({
    cors: {
        origin: Config.socket.SOCKET_ORIGIN,
        credentials: Config.socket.SOCKET_SIGNALING_CREDENTIALS,
    },
})
export class DrawingGateway {
    @WebSocketServer()
    server: MyServer;

    @SubscribeMessage('stroke_canvas')
    async handlePickPic(
        @ConnectedSocket() client: MySocket,
        @MessageBody() data: any,
    ) {
        let [roomId, offX, offY] = data;
        client.join(roomId);
        console.log(client.rooms);
        console.log(client['adapter']);

        client.broadcast
            .to(roomId)
            .emit('stroke_canvas', offX, offY, client.id);
        // client
        //     .to(roomId)
        //     .except(client.id)

        // client.broadcast.emit('stroke_canvas', offX, offY);
    }
}
