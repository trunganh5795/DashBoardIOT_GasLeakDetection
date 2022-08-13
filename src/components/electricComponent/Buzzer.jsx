import React from 'react'
import { useSelector } from 'react-redux'
import './Buzzer.css'
export default function Buzzer() {
    const buzzer = useSelector((state) => state.ElectricStatusReducer.buzzer)
    return (
        <div style={{position: 'relative'}}>
            <div className="frame" >
                <div style={{display:`${buzzer > 0 ? "" : 'none'}`}}>
                    <svg  width="14px" height="60px" className="line line-1">
                        <path d="M2,58 C14,45 14,15 2,2" />
                    </svg>
                    <svg width="14px" height="60px" className="line line-2">
                        <path d="M2,58 C14,45 14,15 2,2" />
                    </svg>
                    <svg width="14px" height="60px" className="line line-3">
                        <path d="M2,58 C14,45 14,15 2,2" />
                    </svg>
                    <svg width="14px" height="60px" className="line line-4">
                        <path d="M12,58 C0,45 0,15 12,2" />
                    </svg>
                    <svg width="14px" height="60px" className="line line-5">
                        <path d="M12,58 C0,45 0,15 12,2" />
                    </svg>
                    <svg width="14px" height="60px" className="line line-6">
                        <path d="M12,58 C0,45 0,15 12,2" />
                    </svg>
                </div>
                <svg width="50px" height="54px" viewBox="0 0 50 54" className="bell" style={{animation:`${buzzer > 0 ? "" : 'unset'}`}}>
                    <path d="M1.13063517,45.0453694 C1.88439195,45.7991262 2.80138269,46.1760046 3.82399539,46.1760046 L17.2955975,46.1760046 C17.2955975,48.331653 18.0493543,50.110423 19.5592683,51.6179365 C21.0667819,53.1254501 22.8983629,53.8816074 25.0012002,53.8816074 C27.1544481,53.8816074 28.9332181,53.1254501 30.4431322,51.6179365 C31.9506457,50.110423 32.7044025,48.331653 32.7044025,46.1760046 L46.1760046,46.1760046 C47.1986173,46.1760046 48.115608,45.7991262 48.8693648,45.0453694 C49.6231216,44.2892122 50,43.3746219 50,42.3496087 C46.1760046,39.1185367 43.3194104,35.1313073 41.379807,30.3879207 C39.4402036,25.6469346 38.4704018,20.6370925 38.4704018,15.408805 C38.4704018,12.0697105 37.5006001,9.48197225 35.6138077,7.54236881 C33.6742042,5.54995439 31.033655,4.41931922 27.6945605,3.98722934 C27.8553939,3.66316194 27.9106054,3.28628355 27.9106054,2.90940516 C27.9106054,2.10043689 27.639349,1.40189159 27.0488262,0.86177925 C26.5087138,0.268855922 25.807768,0 25.0012002,0 C24.192232,0 23.5464977,0.268855922 23.0063853,0.86177925 C22.413462,1.40189159 22.1446061,2.10043689 22.1446061,2.90940516 C22.1446061,3.28628355 22.1974171,3.66316194 22.360651,3.98722934 C19.019156,4.41931922 16.3786068,5.54995439 14.4390033,7.54236881 C12.4993999,9.48197225 11.5295982,12.0697105 11.5295982,15.408805 C11.5295982,20.6370925 10.5597964,25.6469346 8.620193,30.3879207 C6.68058956,35.1313073 3.82399539,39.1185367 0,42.3496087 C0,43.3746219 0.376878391,44.2892122 1.13063517,45.0453694 L1.13063517,45.0453694 Z M20.2050026,45.6911037 C20.52907,45.6911037 20.6899035,45.8519372 20.6899035,46.1760046 C20.6899035,47.3618513 21.1195929,48.384464 21.9837726,49.1934322 C22.7903404,50.0552115 23.8153536,50.4873014 25.0012002,50.4873014 C25.3228672,50.4873014 25.4861011,50.6481348 25.4861011,50.9722022 C25.4861011,51.2938691 25.3228672,51.4571031 25.0012002,51.4571031 C23.5464977,51.4571031 22.3054395,50.9169907 21.2828268,49.894378 C20.2578136,48.8693648 19.7201018,47.6307072 19.7201018,46.1760046 C19.7201018,45.8519372 19.8809352,45.6911037 20.2050026,45.6911037 L20.2050026,45.6911037 Z" />
                </svg>
            </div>
        </div>


    )
}
