import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import CountUp from "react-countup";
import '../style/main.css';

const YouTubeStats = () => {
    const [stats, setStats] = useState(null);
    const API_KEY = "AIzaSyBbX_UQm9gJwoPouYOE6jOHx0Zl6Kj-emM";
    const HANDLE = "@lurneyes1253";

    useEffect(() => {
        const fetchChannelId = async () => {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=id&q=${HANDLE}&type=channel&key=${API_KEY}`)
            const data = await response.json();
            const channelId = data.items[0]?.id?.channelId;

            if (channelId) {
                const statsRecponse = await fetch (
                    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`
                )
                const statsData = await statsRecponse.json();
                setStats(statsData.items[0].statistics);
            }

        }
        if (!stats) {
            fetchChannelId()
        }
    }, [stats])

    return (
        <div>
            {stats ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'}}>
                    <p>
                        View:{" "}
                        <CountUp
                            start={0}
                            end={parseInt(stats.viewCount)}
                            duration={2.5}
                            separator=","
                        />
                    </p>
                    <p>
                        Subscribe:{" "}
                        <CountUp
                            start={0}
                            end={parseInt(stats.subscriberCount)}
                            duration={2.5}
                            separator=","
                        />
                    </p>
                </div>
            ) : (
                <CircularProgress sx={{color: '#ff7e5f'}} className="circularBar"/>
            )}
        </div>
    );
      
}

export default YouTubeStats;