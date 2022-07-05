import { config } from '../config/Constants';
import { Request, response, Response } from 'express';
import shortId from 'shortid';


export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        const { originURL } = req.body
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        response.json({ originURL, hash, shortURL })
    }

    public async redirect(req: Request, res: Response): Promise<void> {
const { hash } = req.params
const url = {
    originURL: 'https://cloud.mongodb.com/v2/62c31c4f5684f053d5cb570d#clusters',
    hash:'',
    shortURL:'',
}
response.redirect(url.originURL)
    }
}