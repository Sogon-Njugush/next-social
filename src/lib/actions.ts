"use server"

import { auth } from "@clerk/nextjs/server"
import prisma from "./client"
import { error } from "console";
import { z } from "zod";

export const switchFollow = async(userId:string)=>{
    const {userId:currentUserId} = auth();

    if(!currentUserId){
        throw new Error("User is not authenticated!");
    }

    try {

        const existingFollow = await prisma.follower.findFirst({
            where:{
                followerId:currentUserId,
                followingId:userId,
            },
        });

        if(existingFollow){
            await prisma.follower.delete({
                where:{
                    id:existingFollow.id
                }
            })
        }else{
            const existingFollowRequest = await prisma.followRequest.findFirst({
                where:{
                    senderId:currentUserId,
                    receiverId:userId,
                }
            });

            if(existingFollowRequest){
                await prisma.followRequest.delete({
                    where:{
                        id:existingFollowRequest.id
                    }
                });
            }else{
                await prisma.followRequest.create({
                data:{
                    senderId: currentUserId,
                    receiverId:userId,
                }
                });
            }
        }
        
    } catch (err) {
        console.log(err);
        throw new Error("Something went wrong!");
    }
};


export const switchBlock = async(userId:string)=>{
    const {userId:currentUserId} = auth();

    if(!currentUserId){
        throw new Error("User is not Authenticated");
    }

    try {

        const existingBlock = await prisma.block.findFirst({
            where:{
                blockedId: userId,
                blockerId: currentUserId,
            }
        });

        if(existingBlock){
            await prisma.block.delete({
                where:{
                    id:existingBlock.id,
                }
            });
        }else{
            await prisma.block.create({
                data:{
                    blockedId:userId,
                    blockerId:currentUserId,
                }
            })
        }
        
    } catch (err) {
        console.log(err)
        throw new Error("Something went wrong!")
    }
}

// accept user request
export const acceptFollowrequest = async (userId:string) =>{

const {userId: currentUserId} = auth();

if(!currentUserId){
    throw new Error("User is not Authenticated!")
}

try {
    
const existingFollowRequest = await prisma.followRequest.findFirst({
    where:{
        senderId: userId,
        receiverId: currentUserId
    }
});

if(existingFollowRequest){
    await prisma.followRequest.delete({
        where:{
           id:existingFollowRequest.id 
        }
    });

    await prisma.follower.create({
        data:{
          followerId: userId,
          followingId: currentUserId
        }
    })
}

} catch (err) {
    console.log(err)
    throw new Error("Something went Wrong!")
}
}

// decline user request
export const declineFollowrequest = async (userId:string) =>{

    const {userId: currentUserId} = auth();
    
    if(!currentUserId){
        throw new Error("User is not Authenticated!")
    }
    
    try {
        
    const existingFollowRequest = await prisma.followRequest.findFirst({
        where:{
            senderId: userId,
            receiverId: currentUserId
        }
    });
    
    if(existingFollowRequest){
        await prisma.followRequest.delete({
            where:{
               id:existingFollowRequest.id 
            }
        });
    
    }
    
    } catch (err) {
        console.log(err)
        throw new Error("Something went Wrong!")
    }
    }


    // UPDATE USER PROFILE

    export const updateProfile = async (formData: FormData) => {

        const fields = Object.fromEntries(formData);

        const filteredFields = Object.fromEntries(
            Object.entries(fields).filter(([_, value]) => value !== "")
        )

        console.log(fields)

        const Profile = z.object({
            cover: z.string().optional(),
            name:z.string().max(60).optional(),
            surname:z.string().max(60).optional(),
            description:z.string().max(255).optional(),
            city:z.string().max(60).optional(),
            school:z.string().max(60).optional(),
            work:z.string().max(60).optional(),
            website:z.string().max(100).optional(),
        });

        const validatedFields = Profile.safeParse(filteredFields);

        if(!validatedFields.success){
            console.log(validatedFields.error.flatten().fieldErrors)
            return "err"
        }

        const {userId} = auth()

        if(!userId){
            return "err"
        }

        try {
            await prisma.user.update({
                where:{
                    id: userId
                },
                data: validatedFields.data
            })
            
        } catch (err) {
            console.log(err)
            throw new Error("Something went Wrong!")
        }
    }