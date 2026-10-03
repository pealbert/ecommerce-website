import type { ClassValue } from "clsx";
import type { MouseEventHandler, ReactNode } from "react";
import type Slick from "react-slick";

export type Theme = "light" | "dark";

export type ClassNameValue = ClassValue;

export type ClickHandler = MouseEventHandler<HTMLButtonElement>;

export type SlickComponent = typeof Slick;

export type SlickModule = SlickComponent | { default: SlickComponent };

export interface BannerData {
	discount: string;
	title: string;
	date: string;
	image: string;
	product: string;
	subtitle: string;
	description: string;
	bgColor: string;
	buttonTextColor: string;
}

export interface BlogPost {
	id: number;
	title: string;
	subtitle: string;
	published: string;
	image: string;
	aosDelay: number;
}

export interface Product {
	id: number;
	img: string;
	title: string;
	price: string;
	aosDelay: string;
}

export interface HeroSlideData {
	id: number;
	img: string;
	subtitle: string;
	title: string;
	title2: string;
}

export interface NavigationLink {
	id: number;
	name: string;
	href: string;
}

export interface FooterLink {
	id: number;
	title: string;
	href: string;
}

export interface ServiceInfo {
	id: number;
	icon: ReactNode;
	title: string;
	description: string;
	aosDelay: number;
}

export interface BannerProps {
	banner: BannerData;
}

export interface BlogCardProps {
	blog: BlogPost;
}

export interface ButtonProps {
	text: string;
	bgColor: string;
	textColor: string;
	handler?: ClickHandler;
}

export interface HeadingProps {
	title: string;
	subtitle: string;
}

export interface OrderHandlerProps {
	handler: ClickHandler;
}

export interface PartnersProps {
	animation: string;
}

export interface PopupProps {
	orderPopup: boolean;
	handleOrderPopup: () => void;
}

export interface ProductCardProps {
	product: Product;
}
