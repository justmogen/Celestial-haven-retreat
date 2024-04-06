import { Room } from "@/models/rooms";
import sanityClient from "./sanity";
import * as queries from "./sanityQueries";

 export async function getFeaturedRoom() {
    const results = await sanityClient.fetch<Room>(
      queries.getFeaturedRoomQuery,
      {},
      {cache: 'no-cache'});

      return results;
 }

 export async function getRooms() {
  const results = await sanityClient.fetch<Room[]>(
    queries.getRoomsQuery,
    {},
    {cache: 'no-cache'}
  )
  return results;
 }


 export async function getRoom(slug: string){
  const results = await sanityClient.fetch<Room>(
    queries.getRoom, 
    {slug},
    {cache: 'no-cache'}
  )
  return results;
 }