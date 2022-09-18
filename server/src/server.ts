import express, { json } from "express";
import { PrismaClient } from '@prisma/client';
import { convertHourToMinutes, convertMinutesToHour } from "./utils/convert-hour-and-minutes";
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();
const PORT = 3333;

app.use(express.json());
app.use(cors());

//LISTING GAMES
app.get('/games', async (req, res) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    });

    return res.json(games);
});

//CREATING AN AD
app.post('/games/:gameId/ads', async (req, res) => {
    const gameId = req.params.gameId;
    const body = req.body;

    const newAd = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: convertHourToMinutes(body.hourStart),
            hourEnd: convertHourToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        }
    });

    return res.status(201).json(newAd);
});

//LISTING ADS BY GAME
app.get('/games/:id/ads', async (req, res) => {
    const gameId = req.params.id;

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true
        },
        where: {
            gameId,
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return res.json(ads.map(ad => {
        return {
            ...ad,
            hourStart: convertMinutesToHour(ad.hourStart),
            hourEnd: convertMinutesToHour(ad.hourEnd),
            weekDays: ad.weekDays.split(',')
        };
    }));
});

//GET DISCORD BY AD
app.get('/ads/:id/discord', async (req, res) => {
    const adId = req.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true
        },
        where: {
            id: adId
        }
    });

    return res.json({
        discord: ad.discord
    });
});

//SERVER LISTENING PORT
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});