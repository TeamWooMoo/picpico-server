import { Module } from '@nestjs/common';
import { SignalingGateway } from './gateways/signaling.gateway';
import { CameraGateway } from './gateways/camera.gateway';
import { DrawingGateway } from './gateways/drawing.gateway';
import { RoomsModule } from '../rooms/rooms.module';
import { SelectionGateway } from './gateways/selection.gateway';
import { DecoGateway } from './gateways/deco.gateway';
import { StickerGateway } from './gateways/sticker.gateway';

@Module({
    imports: [RoomsModule],
    providers: [
        SignalingGateway,
        CameraGateway,
        DrawingGateway,
        StickerGateway,
        SelectionGateway,
        DecoGateway,
    ],
})
export class SocketsModule {}
