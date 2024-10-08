PGDMP      .                |            sistema    16.4    16.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24647    sistema    DATABASE     }   CREATE DATABASE sistema WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE sistema;
                postgres    false            �            1259    24657    login    TABLE     �   CREATE TABLE public.login (
    "login_ID" integer NOT NULL,
    "personaId" integer NOT NULL,
    "loginUsuario" character varying(40) NOT NULL,
    "loginClave" character varying(50) NOT NULL
);
    DROP TABLE public.login;
       public         heap    postgres    false            �            1259    24655    login_login_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."login_login_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."login_login_ID_seq";
       public          postgres    false    219            �           0    0    login_login_ID_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."login_login_ID_seq" OWNED BY public.login."login_ID";
          public          postgres    false    217            �            1259    24656    login_personaId_seq    SEQUENCE     �   CREATE SEQUENCE public."login_personaId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."login_personaId_seq";
       public          postgres    false    219            �           0    0    login_personaId_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."login_personaId_seq" OWNED BY public.login."personaId";
          public          postgres    false    218            �            1259    24649    persona    TABLE     �   CREATE TABLE public.persona (
    "personaId" integer NOT NULL,
    "personaNombres" character varying(40) NOT NULL,
    "personaCorreo" character varying(50) NOT NULL
);
    DROP TABLE public.persona;
       public         heap    postgres    false            �            1259    24648    persona_personaId_seq    SEQUENCE     �   CREATE SEQUENCE public."persona_personaId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."persona_personaId_seq";
       public          postgres    false    216            �           0    0    persona_personaId_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."persona_personaId_seq" OWNED BY public.persona."personaId";
          public          postgres    false    215            !           2604    24660    login login_ID    DEFAULT     t   ALTER TABLE ONLY public.login ALTER COLUMN "login_ID" SET DEFAULT nextval('public."login_login_ID_seq"'::regclass);
 ?   ALTER TABLE public.login ALTER COLUMN "login_ID" DROP DEFAULT;
       public          postgres    false    219    217    219            "           2604    24661    login personaId    DEFAULT     v   ALTER TABLE ONLY public.login ALTER COLUMN "personaId" SET DEFAULT nextval('public."login_personaId_seq"'::regclass);
 @   ALTER TABLE public.login ALTER COLUMN "personaId" DROP DEFAULT;
       public          postgres    false    218    219    219                        2604    24652    persona personaId    DEFAULT     z   ALTER TABLE ONLY public.persona ALTER COLUMN "personaId" SET DEFAULT nextval('public."persona_personaId_seq"'::regclass);
 B   ALTER TABLE public.persona ALTER COLUMN "personaId" DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    24657    login 
   TABLE DATA           V   COPY public.login ("login_ID", "personaId", "loginUsuario", "loginClave") FROM stdin;
    public          postgres    false    219   �       �          0    24649    persona 
   TABLE DATA           Q   COPY public.persona ("personaId", "personaNombres", "personaCorreo") FROM stdin;
    public          postgres    false    216   �       �           0    0    login_login_ID_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."login_login_ID_seq"', 1, true);
          public          postgres    false    217            �           0    0    login_personaId_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."login_personaId_seq"', 1, true);
          public          postgres    false    218            �           0    0    persona_personaId_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."persona_personaId_seq"', 1, true);
          public          postgres    false    215            &           2606    24663    login login_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_pkey PRIMARY KEY ("login_ID");
 :   ALTER TABLE ONLY public.login DROP CONSTRAINT login_pkey;
       public            postgres    false    219            $           2606    24654    persona persona_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.persona
    ADD CONSTRAINT persona_pkey PRIMARY KEY ("personaId");
 >   ALTER TABLE ONLY public.persona DROP CONSTRAINT persona_pkey;
       public            postgres    false    216            '           2606    24664    login FK_Persona    FK CONSTRAINT     �   ALTER TABLE ONLY public.login
    ADD CONSTRAINT "FK_Persona" FOREIGN KEY ("personaId") REFERENCES public.persona("personaId");
 <   ALTER TABLE ONLY public.login DROP CONSTRAINT "FK_Persona";
       public          postgres    false    216    219    4644            �   !   x�3�4��*M�s34�4426153����� H"�      �   8   x�3��*M�Sp/-�L-*J���r��a\C#���J��ԼD�ԔR��|�=... .C�     