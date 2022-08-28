/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect} from 'react';
import styles from '@/styles/SideBar.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUniversity,
  faFileAlt,
  faGraduationCap,
  faUserAlt,
  faFileInvoice,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { loginFP } from '@/Components/Redux/action/index'
import { useDispatch } from 'react-redux'
interface Page {
  name: string;
  link: string;
}
interface list {
  name: string;
  email: string;
  page: Page[];
  userData: list
}
interface userData {
  
  loginuserReducer:()=>list[]
}
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
const SideBar = () => {
  const dispatch=useDispatch()
  const router = useRouter();
  const list = useSelector((state) => state.loginFPReducer.userData);
  const {pages}= list.data
  useEffect(() => {
  const name =getCookie(`nameFP`) 
  const email=getCookie(`emailFP`) 
  const instituteName= getCookie(`UniFP`)
  if(!email && !name)
  {
    router.replace(`/FocalPerson`)
  }else{
    const pageJson =getCookie(`pageFP`)
    if(pageJson)
    {const pages = JSON.parse(pageJson)
    const data={name,email,instituteName,pages}
    dispatch(loginFP(data))}
  }
  }, [])

  
   // const page = []
   //Need For Here Because Error Are Comming While Loading Page 
   
  return (
    <>
       <nav className={styles.main_menu}>
        <ul className={styles.ul}>
          {pages.map((item: Page,index:number) => (
            <li className={styles.li} key={index}>
              <a
                className={styles.a}
                href="#/"
                onClick={() => {
                  router.push(`/FocalPerson/${item.link}/`);
                }}
              >
                {item.name == `Programs Details` && (
                  <FontAwesomeIcon
                    className="fa-lg"
                    icon={faUniversity as IconProp}
                  />
                )}
                {item.name == `Degree Templates` && (
                  <FontAwesomeIcon
                    className="fa-lg"
                    icon={faFileAlt as IconProp}
                  />
                )}
                {item.name == `Transcript Templates` && (
                  <FontAwesomeIcon
                    className="fa-lg"
                    icon={faFileInvoice as IconProp}
                  />
                )}
                {item.name == `Degree Issuance` && (
                  <FontAwesomeIcon
                    className="fa-lg"
                    icon={faGraduationCap as IconProp}
                  />
                )}
                {item.name == `Acount Mangement` && (
                  <FontAwesomeIcon
                    className="fa-lg"
                    icon={faUserAlt as IconProp}
                  />
                )}
                <span className={styles.nav_text}>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default SideBar;