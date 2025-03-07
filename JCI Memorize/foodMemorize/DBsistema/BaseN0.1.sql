PGDMP  /                	    |         
   sistemaPro    16.4    16.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    57437 
   sistemaPro    DATABASE     �   CREATE DATABASE "sistemaPro" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE "sistemaPro";
                postgres    false            �            1259    57449    login    TABLE     �   CREATE TABLE public.login (
    "loginId" integer NOT NULL,
    "personaId" integer NOT NULL,
    "loginCorreo" character varying(100) NOT NULL,
    "loginPasswork" character varying(100) NOT NULL
);
    DROP TABLE public.login;
       public         heap    postgres    false            �            1259    57447    login_loginId_seq    SEQUENCE     �   CREATE SEQUENCE public."login_loginId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."login_loginId_seq";
       public          postgres    false    219            �           0    0    login_loginId_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."login_loginId_seq" OWNED BY public.login."loginId";
          public          postgres    false    217            �            1259    57448    login_personaId_seq    SEQUENCE     �   CREATE SEQUENCE public."login_personaId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."login_personaId_seq";
       public          postgres    false    219            �           0    0    login_personaId_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."login_personaId_seq" OWNED BY public.login."personaId";
          public          postgres    false    218            �            1259    57439    persona    TABLE     �   CREATE TABLE public.persona (
    "personaId" integer NOT NULL,
    "personaNombre" character varying(100) NOT NULL,
    "personaEdad" character varying(100) NOT NULL
);
    DROP TABLE public.persona;
       public         heap    postgres    false            �            1259    57438    persona_personaId_seq    SEQUENCE     �   CREATE SEQUENCE public."persona_personaId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."persona_personaId_seq";
       public          postgres    false    216            �           0    0    persona_personaId_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."persona_personaId_seq" OWNED BY public.persona."personaId";
          public          postgres    false    215            !           2604    57452    login loginId    DEFAULT     r   ALTER TABLE ONLY public.login ALTER COLUMN "loginId" SET DEFAULT nextval('public."login_loginId_seq"'::regclass);
 >   ALTER TABLE public.login ALTER COLUMN "loginId" DROP DEFAULT;
       public          postgres    false    217    219    219            "           2604    57453    login personaId    DEFAULT     v   ALTER TABLE ONLY public.login ALTER COLUMN "personaId" SET DEFAULT nextval('public."login_personaId_seq"'::regclass);
 @   ALTER TABLE public.login ALTER COLUMN "personaId" DROP DEFAULT;
       public          postgres    false    218    219    219                        2604    57442    persona personaId    DEFAULT     z   ALTER TABLE ONLY public.persona ALTER COLUMN "personaId" SET DEFAULT nextval('public."persona_personaId_seq"'::regclass);
 B   ALTER TABLE public.persona ALTER COLUMN "personaId" DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    57449    login 
   TABLE DATA           W   COPY public.login ("loginId", "personaId", "loginCorreo", "loginPasswork") FROM stdin;
    public          postgres    false    219   �       �          0    57439    persona 
   TABLE DATA           N   COPY public.persona ("personaId", "personaNombre", "personaEdad") FROM stdin;
    public          postgres    false    216   �       �           0    0    login_loginId_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."login_loginId_seq"', 1, true);
          public          postgres    false    217            �           0    0    login_personaId_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."login_personaId_seq"', 1, true);
          public          postgres    false    218            �           0    0    persona_personaId_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."persona_personaId_seq"', 2, true);
          public          postgres    false    215            &           2606    57457    login login_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_pkey PRIMARY KEY ("loginId");
 :   ALTER TABLE ONLY public.login DROP CONSTRAINT login_pkey;
       public            postgres    false    219            $           2606    57446    persona persona_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.persona
    ADD CONSTRAINT persona_pkey PRIMARY KEY ("personaId");
 >   ALTER TABLE ONLY public.persona DROP CONSTRAINT persona_pkey;
       public            postgres    false    216            '           2606    57458    login FK_persona    FK CONSTRAINT     �   ALTER TABLE ONLY public.login
    ADD CONSTRAINT "FK_persona" FOREIGN KEY ("personaId") REFERENCES public.persona("personaId");
 <   ALTER TABLE ONLY public.login DROP CONSTRAINT "FK_persona";
       public          postgres    false    216    219    4644            �   *   x�3�4��*M�s34sH�M���K���442615����� ��w      �      x�3��*M��4��2��b���� J�2     