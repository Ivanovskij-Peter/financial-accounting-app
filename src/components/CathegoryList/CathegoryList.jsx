import React, {Component} from 'react';
import {InputGroup, Dropdown, DropdownButton} from 'react-bootstrap';
import styles from './CathegoryList.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import sprite from '../../images/sprite.svg';

export default class CathegoryList extends Component {
  state = {
    title: "Категория товара",
    isOpen: false
  }

  changeCathegory = (e) => {
    if (e.currentTarget) {
        this.setState({ isOpen: !this.state.isOpen });
    }
    if( e.target.nodeName === "A" ){
        this.setState({ title: e.target.textContent});
    } 
  }

  render() {
    const { title, isOpen } = this.state;
    return (
      <div className={styles.cathegory_container} onClick={this.changeCathegory}>
        {isOpen ?
          (<svg width="20px" height="20" className={styles.iconUp}>
            <use href={sprite +"#arrov-down"} />
        </svg>)
          :
          (<svg width="20px" height="20" className={styles.icon}>
            <use href={sprite +"#arrov-down"} />
          </svg>)
        }

      <DropdownButton
          as={InputGroup.Append}
          variant={styles.input__group}
          title={title}
          id={styles.dropdown__btn}
          className={styles.input_group}
        >
        <Dropdown.Item className={styles.dropdown__item} value="transport">Транспорт</Dropdown.Item>
        <Dropdown.Item className={styles.dropdown__item} value="products">Продукты</Dropdown.Item>
        <Dropdown.Item className={styles.dropdown__item} value="health">Здоровье</Dropdown.Item>
        <Dropdown.Item className={styles.dropdown__item} value="alcohol">Алкоголь</Dropdown.Item>
        <Dropdown.Item className={styles.dropdown__item} value="avocation">Развлечения</Dropdown.Item>
        <Dropdown.Item className={styles.dropdown__item} value="forHome">Все для дома</Dropdown.Item>
        <Dropdown.Item className={styles.dropdown__item} value="technics">Техника</Dropdown.Item>
        <Dropdown.Item className={styles.dropdown__item} value="communal">Коммуналка, связь</Dropdown.Item>
        <Dropdown.Item className={styles.dropdown__item} value="sport">Спорт, хобби</Dropdown.Item>
        <Dropdown.Item className={styles.dropdown__item} value="education">Образование</Dropdown.Item>
        <Dropdown.Item className={styles.dropdown__item} value="atc">Прочее</Dropdown.Item>   
        </DropdownButton>
        </div>
    );
  }
}
