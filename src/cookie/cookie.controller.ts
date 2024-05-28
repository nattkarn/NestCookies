import { Controller, Post, Body, Res, Get } from '@nestjs/common';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';

@Controller('cookie')
export class CookieController {
    @Get()
    getCookie(@Res() res: Response) {
        res.cookie('testCookie', 'cookieValue', { httpOnly: true });
        res.send('Cookie has been set');
    }

    @Post('/login')
    login(@Body() loginDto: LoginDto, @Res() res: Response) {
        const { email, password } = loginDto;

        // Simple authentication logic for demonstration (replace with real logic)
        if (email === 'test@example.com' && password === 'password') {
            res.cookie('authToken', 'someRandomToken', { httpOnly: true });
            return res.send('Login successful, cookie has been set');
        } else {
            return res.status(401).send('Invalid credentials');
        }
    }
}
