import { Injectable } from '@angular/core';
import {decode} from 'jsonwebtoken';
import { JWTToken } from '../models/jwt-token';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  // Function to verify JWT expiration
  verifyJwtExpiration(token: string): boolean {
    // try {
    //   // Decode the token to extract the expiration time
    //   const decodedToken = decode<JWTToken>(token);
    //   // const decoded = (token, { complete: true });

    //   // Check if the decoded token has an expiration time
    //   if (decodedToken && decodedToken.exp) {
    //     // Get the current time in seconds
    //     const currentTime = Math.floor(Date.now() / 1000);

    //     // Compare the current time with the token's expiration time
    //     if (decodedToken.exp > currentTime) {
    //       // Token has not expired yet
    //       return true;
    //     }
    //   }
    // } catch (err) {
    //   // Invalid token or error occurred while decoding
    //   return false;
    // }

    // // Token has expired or does not have an expiration time
    // return false;
    return true; // TODO: Implement this in the future
  }
}
