import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import { LocalNotifications } from '@capacitor/local-notifications';


async function sendNotification() {
    try {
        // Check for permission first
        const permissions = await LocalNotifications.checkPermissions();

        if (permissions.receive === 'granted') {
            await LocalNotifications.schedule({
                notifications: [
                    {
                        title: 'Hello!',
                        body: 'This is a local notification',
                        id: Date.now(),
                        schedule: { at: new Date() },
                    },
                ],
            });
        } else {
            const requestResult = await LocalNotifications.requestPermissions();

            if (requestResult.receive === 'granted') {
                // You can schedule the notification now since permission is granted
            }
        }
    } catch (error) {
        console.error('Error scheduling notification:', error);
    }
}

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
        sendNotification();
    }, 2000); // Navigate after 2 seconds

    return () => clearTimeout(timer); // Clear the timer if the component is unmounted before the timeout finishes
  }, [navigate]);

  return (
    <div className="flex flex-col h-screen bg-light justify-center items-center">
        <div className="h-[7.5rem] w-[7.5rem] rounded-[30px] bg-white flex justify-center items-center mt-auto">
            <img className="h-[5.9375rem] w-[5.9375rem]" src={logo}/>

        </div>
        <p className="mt-auto font-label text-label font-lexend mb-[2.1875rem] ">
        v0.2
        </p>
    </div>
  )
}

export default Splash