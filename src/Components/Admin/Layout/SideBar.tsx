/* eslint-disable prettier/prettier */
import React,{useEffect} from 'react';
import styles from '../../../styles/SideBar.module.css';
import {
  faFileAlt,
  faFileInvoice,
  faGraduationCap,
  faUniversity,
  faUserAlt,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { loginuser } from '@/Components/Redux/action/index'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { getCookie } from 'cookies-next';
interface Page {
  name: string;
  link: string;
}
interface list {
  name: string;
  email: string;
  page: Page[];
  loginuserReducer:()=>list[]
}

const SideBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const list = useSelector((state:list) => state.loginuserReducer.userData);
  let {page}= list.data;
  if(!page)
  {
    page=[]
  }
useEffect(() => {
  const name =getCookie(`nameAdmin`) 
  const email=getCookie(`emailAdmin`) 
  if(!email && !name)
  {
     router.replace(`/Admin`)
  }else{
    const pageJson =getCookie(`pageAdmin`)
    const page =  JSON.parse(pageJson)
    const data={name,email,page}
    dispatch(loginuser(data))
  }
  
}, [])

  return (
    <div>
      <nav className={styles.main_menu}>
        <ul className={styles.ul}>
          {page.map((item: Page,index:number) => (
            <li className={styles.li} key={index}>
              <a
                className={styles.a}
                href="#/UniveristiesDetails"
                onClick={() => {
                  router.push(`/Admin/${item.link}/`);
                }}
              >
                {item.name == `Universities Details` && (
                  <FontAwesomeIcon
                    className="fa-lg"
                    icon={faUniversity as IconProp}
                  />
                )}
                {item.name == `Degree Templates` && (
                  <FontAwesomeIcon
                    className="fa-lg"
                    icon={faFileInvoice as IconProp}
                  />
                )}
                {item.name == `Transcript Templates` && (
                  <FontAwesomeIcon
                    className="fa-lg"
                    icon={faFileAlt as IconProp}
                  />
                )}
                {item.name == `Degree Issuance` && (
                  <FontAwesomeIcon
                    className="fa-lg"
                    icon={faGraduationCap as IconProp}
                  />
                )}
                {item.name == `Hec Queries` && (
                  <FontAwesomeIcon
                    className="fa-lg"
                    icon={faComments as IconProp}
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
    </div>
  );
};

export default SideBar;
