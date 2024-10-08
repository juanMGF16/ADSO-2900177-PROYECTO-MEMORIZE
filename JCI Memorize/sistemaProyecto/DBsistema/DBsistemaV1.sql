PGDMP  ,    
                |            sistema    16.4    16.4 I               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    24669    sistema    DATABASE     }   CREATE DATABASE sistema WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE sistema;
                postgres    false            �            1259    24694 	   anfitrion    TABLE     r   CREATE TABLE public.anfitrion (
    "anfitrionId" integer NOT NULL,
    persona character varying(50) NOT NULL
);
    DROP TABLE public.anfitrion;
       public         heap    postgres    false            �            1259    24693    anfitrion_anfitrionId_seq    SEQUENCE     �   CREATE SEQUENCE public."anfitrion_anfitrionId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."anfitrion_anfitrionId_seq";
       public          postgres    false    221                       0    0    anfitrion_anfitrionId_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."anfitrion_anfitrionId_seq" OWNED BY public.anfitrion."anfitrionId";
          public          postgres    false    220            �            1259    24759    avatar    TABLE     �   CREATE TABLE public.avatar (
    "avatarId" integer NOT NULL,
    "personaId" integer NOT NULL,
    "avatarImg" character varying NOT NULL
);
    DROP TABLE public.avatar;
       public         heap    postgres    false            �            1259    24758    avatar_avatarId_seq    SEQUENCE     �   CREATE SEQUENCE public."avatar_avatarId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."avatar_avatarId_seq";
       public          postgres    false    231                       0    0    avatar_avatarId_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."avatar_avatarId_seq" OWNED BY public.avatar."avatarId";
          public          postgres    false    230            �            1259    24742 	   historial    TABLE     �   CREATE TABLE public.historial (
    "historialId" integer NOT NULL,
    "personaId" integer NOT NULL,
    "rankingId" integer NOT NULL
);
    DROP TABLE public.historial;
       public         heap    postgres    false            �            1259    24741    historial_historialId_seq    SEQUENCE     �   CREATE SEQUENCE public."historial_historialId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."historial_historialId_seq";
       public          postgres    false    229            	           0    0    historial_historialId_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."historial_historialId_seq" OWNED BY public.historial."historialId";
          public          postgres    false    228            �            1259    24679    login    TABLE     �   CREATE TABLE public.login (
    "loginId" integer NOT NULL,
    "personaId" integer NOT NULL,
    "loginCorreo" character varying(60) NOT NULL,
    "loginPasswork" character varying(60) NOT NULL
);
    DROP TABLE public.login;
       public         heap    postgres    false            �            1259    24677    login_loginId_seq    SEQUENCE     �   CREATE SEQUENCE public."login_loginId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."login_loginId_seq";
       public          postgres    false    219            
           0    0    login_loginId_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."login_loginId_seq" OWNED BY public.login."loginId";
          public          postgres    false    217            �            1259    24678    login_personaId_seq    SEQUENCE     �   CREATE SEQUENCE public."login_personaId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."login_personaId_seq";
       public          postgres    false    219                       0    0    login_personaId_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."login_personaId_seq" OWNED BY public.login."personaId";
          public          postgres    false    218            �            1259    24671    persona    TABLE     �   CREATE TABLE public.persona (
    "personaId" integer NOT NULL,
    "personaNombres" character varying(50) NOT NULL,
    "personaEdad" integer NOT NULL
);
    DROP TABLE public.persona;
       public         heap    postgres    false            �            1259    24670    persona_personaId_seq    SEQUENCE     �   CREATE SEQUENCE public."persona_personaId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."persona_personaId_seq";
       public          postgres    false    216                       0    0    persona_personaId_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."persona_personaId_seq" OWNED BY public.persona."personaId";
          public          postgres    false    215            �            1259    24701 
   puntuacion    TABLE     �   CREATE TABLE public.puntuacion (
    "puntuacionId" integer NOT NULL,
    "nivelSuperado" integer NOT NULL,
    "tiempoRespuesta" bigint NOT NULL
);
    DROP TABLE public.puntuacion;
       public         heap    postgres    false            �            1259    24700    puntuacion_puntuacionId_seq    SEQUENCE     �   CREATE SEQUENCE public."puntuacion_puntuacionId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."puntuacion_puntuacionId_seq";
       public          postgres    false    223                       0    0    puntuacion_puntuacionId_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."puntuacion_puntuacionId_seq" OWNED BY public.puntuacion."puntuacionId";
          public          postgres    false    222            �            1259    24725    ranking    TABLE     �   CREATE TABLE public.ranking (
    "rankingId" integer NOT NULL,
    "salaId" integer NOT NULL,
    fecha date NOT NULL,
    "puntuacionId" integer NOT NULL,
    tiempo time with time zone NOT NULL
);
    DROP TABLE public.ranking;
       public         heap    postgres    false            �            1259    24724    ranking_rankingId_seq    SEQUENCE     �   CREATE SEQUENCE public."ranking_rankingId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."ranking_rankingId_seq";
       public          postgres    false    227                       0    0    ranking_rankingId_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."ranking_rankingId_seq" OWNED BY public.ranking."rankingId";
          public          postgres    false    226            �            1259    24708    sala    TABLE     �   CREATE TABLE public.sala (
    "salaId" integer NOT NULL,
    "anfitrionId" integer NOT NULL,
    "personaId" integer NOT NULL,
    duracion time with time zone NOT NULL
);
    DROP TABLE public.sala;
       public         heap    postgres    false            �            1259    24707    sala_salaId_seq    SEQUENCE     �   CREATE SEQUENCE public."sala_salaId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."sala_salaId_seq";
       public          postgres    false    225                       0    0    sala_salaId_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."sala_salaId_seq" OWNED BY public.sala."salaId";
          public          postgres    false    224            A           2604    24697    anfitrion anfitrionId    DEFAULT     �   ALTER TABLE ONLY public.anfitrion ALTER COLUMN "anfitrionId" SET DEFAULT nextval('public."anfitrion_anfitrionId_seq"'::regclass);
 F   ALTER TABLE public.anfitrion ALTER COLUMN "anfitrionId" DROP DEFAULT;
       public          postgres    false    221    220    221            F           2604    24762    avatar avatarId    DEFAULT     v   ALTER TABLE ONLY public.avatar ALTER COLUMN "avatarId" SET DEFAULT nextval('public."avatar_avatarId_seq"'::regclass);
 @   ALTER TABLE public.avatar ALTER COLUMN "avatarId" DROP DEFAULT;
       public          postgres    false    231    230    231            E           2604    24745    historial historialId    DEFAULT     �   ALTER TABLE ONLY public.historial ALTER COLUMN "historialId" SET DEFAULT nextval('public."historial_historialId_seq"'::regclass);
 F   ALTER TABLE public.historial ALTER COLUMN "historialId" DROP DEFAULT;
       public          postgres    false    228    229    229            ?           2604    24682    login loginId    DEFAULT     r   ALTER TABLE ONLY public.login ALTER COLUMN "loginId" SET DEFAULT nextval('public."login_loginId_seq"'::regclass);
 >   ALTER TABLE public.login ALTER COLUMN "loginId" DROP DEFAULT;
       public          postgres    false    219    217    219            @           2604    24683    login personaId    DEFAULT     v   ALTER TABLE ONLY public.login ALTER COLUMN "personaId" SET DEFAULT nextval('public."login_personaId_seq"'::regclass);
 @   ALTER TABLE public.login ALTER COLUMN "personaId" DROP DEFAULT;
       public          postgres    false    219    218    219            >           2604    24674    persona personaId    DEFAULT     z   ALTER TABLE ONLY public.persona ALTER COLUMN "personaId" SET DEFAULT nextval('public."persona_personaId_seq"'::regclass);
 B   ALTER TABLE public.persona ALTER COLUMN "personaId" DROP DEFAULT;
       public          postgres    false    215    216    216            B           2604    24704    puntuacion puntuacionId    DEFAULT     �   ALTER TABLE ONLY public.puntuacion ALTER COLUMN "puntuacionId" SET DEFAULT nextval('public."puntuacion_puntuacionId_seq"'::regclass);
 H   ALTER TABLE public.puntuacion ALTER COLUMN "puntuacionId" DROP DEFAULT;
       public          postgres    false    223    222    223            D           2604    24728    ranking rankingId    DEFAULT     z   ALTER TABLE ONLY public.ranking ALTER COLUMN "rankingId" SET DEFAULT nextval('public."ranking_rankingId_seq"'::regclass);
 B   ALTER TABLE public.ranking ALTER COLUMN "rankingId" DROP DEFAULT;
       public          postgres    false    227    226    227            C           2604    24711    sala salaId    DEFAULT     n   ALTER TABLE ONLY public.sala ALTER COLUMN "salaId" SET DEFAULT nextval('public."sala_salaId_seq"'::regclass);
 <   ALTER TABLE public.sala ALTER COLUMN "salaId" DROP DEFAULT;
       public          postgres    false    225    224    225            �          0    24694 	   anfitrion 
   TABLE DATA           ;   COPY public.anfitrion ("anfitrionId", persona) FROM stdin;
    public          postgres    false    221   �R                  0    24759    avatar 
   TABLE DATA           F   COPY public.avatar ("avatarId", "personaId", "avatarImg") FROM stdin;
    public          postgres    false    231   �R       �          0    24742 	   historial 
   TABLE DATA           L   COPY public.historial ("historialId", "personaId", "rankingId") FROM stdin;
    public          postgres    false    229   �R       �          0    24679    login 
   TABLE DATA           W   COPY public.login ("loginId", "personaId", "loginCorreo", "loginPasswork") FROM stdin;
    public          postgres    false    219   S       �          0    24671    persona 
   TABLE DATA           O   COPY public.persona ("personaId", "personaNombres", "personaEdad") FROM stdin;
    public          postgres    false    216   aS       �          0    24701 
   puntuacion 
   TABLE DATA           X   COPY public.puntuacion ("puntuacionId", "nivelSuperado", "tiempoRespuesta") FROM stdin;
    public          postgres    false    223   �S       �          0    24725    ranking 
   TABLE DATA           W   COPY public.ranking ("rankingId", "salaId", fecha, "puntuacionId", tiempo) FROM stdin;
    public          postgres    false    227   �S       �          0    24708    sala 
   TABLE DATA           N   COPY public.sala ("salaId", "anfitrionId", "personaId", duracion) FROM stdin;
    public          postgres    false    225   �S                  0    0    anfitrion_anfitrionId_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."anfitrion_anfitrionId_seq"', 1, false);
          public          postgres    false    220                       0    0    avatar_avatarId_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."avatar_avatarId_seq"', 1, false);
          public          postgres    false    230                       0    0    historial_historialId_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."historial_historialId_seq"', 1, false);
          public          postgres    false    228                       0    0    login_loginId_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."login_loginId_seq"', 1, true);
          public          postgres    false    217                       0    0    login_personaId_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."login_personaId_seq"', 1, true);
          public          postgres    false    218                       0    0    persona_personaId_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."persona_personaId_seq"', 2, true);
          public          postgres    false    215                       0    0    puntuacion_puntuacionId_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."puntuacion_puntuacionId_seq"', 1, false);
          public          postgres    false    222                       0    0    ranking_rankingId_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."ranking_rankingId_seq"', 1, false);
          public          postgres    false    226                       0    0    sala_salaId_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."sala_salaId_seq"', 1, false);
          public          postgres    false    224            N           2606    24699    anfitrion anfitrion_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.anfitrion
    ADD CONSTRAINT anfitrion_pkey PRIMARY KEY ("anfitrionId");
 B   ALTER TABLE ONLY public.anfitrion DROP CONSTRAINT anfitrion_pkey;
       public            postgres    false    221            X           2606    24766    avatar avatar_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.avatar
    ADD CONSTRAINT avatar_pkey PRIMARY KEY ("avatarId");
 <   ALTER TABLE ONLY public.avatar DROP CONSTRAINT avatar_pkey;
       public            postgres    false    231            J           2606    24687    login correo 
   CONSTRAINT     P   ALTER TABLE ONLY public.login
    ADD CONSTRAINT correo UNIQUE ("loginCorreo");
 6   ALTER TABLE ONLY public.login DROP CONSTRAINT correo;
       public            postgres    false    219            V           2606    24747    historial historial_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.historial
    ADD CONSTRAINT historial_pkey PRIMARY KEY ("historialId");
 B   ALTER TABLE ONLY public.historial DROP CONSTRAINT historial_pkey;
       public            postgres    false    229            L           2606    24685    login login_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_pkey PRIMARY KEY ("loginId");
 :   ALTER TABLE ONLY public.login DROP CONSTRAINT login_pkey;
       public            postgres    false    219            H           2606    24676    persona persona_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.persona
    ADD CONSTRAINT persona_pkey PRIMARY KEY ("personaId");
 >   ALTER TABLE ONLY public.persona DROP CONSTRAINT persona_pkey;
       public            postgres    false    216            P           2606    24706    puntuacion puntuacion_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.puntuacion
    ADD CONSTRAINT puntuacion_pkey PRIMARY KEY ("puntuacionId");
 D   ALTER TABLE ONLY public.puntuacion DROP CONSTRAINT puntuacion_pkey;
       public            postgres    false    223            T           2606    24730    ranking ranking_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.ranking
    ADD CONSTRAINT ranking_pkey PRIMARY KEY ("rankingId");
 >   ALTER TABLE ONLY public.ranking DROP CONSTRAINT ranking_pkey;
       public            postgres    false    227            R           2606    24713    sala sala_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.sala
    ADD CONSTRAINT sala_pkey PRIMARY KEY ("salaId");
 8   ALTER TABLE ONLY public.sala DROP CONSTRAINT sala_pkey;
       public            postgres    false    225            Z           2606    24714    sala FK_anfitrion    FK CONSTRAINT     �   ALTER TABLE ONLY public.sala
    ADD CONSTRAINT "FK_anfitrion" FOREIGN KEY ("anfitrionId") REFERENCES public.anfitrion("anfitrionId");
 =   ALTER TABLE ONLY public.sala DROP CONSTRAINT "FK_anfitrion";
       public          postgres    false    221    4686    225            Y           2606    24688    login FK_persona    FK CONSTRAINT     �   ALTER TABLE ONLY public.login
    ADD CONSTRAINT "FK_persona" FOREIGN KEY ("personaId") REFERENCES public.persona("personaId");
 <   ALTER TABLE ONLY public.login DROP CONSTRAINT "FK_persona";
       public          postgres    false    219    4680    216            [           2606    24719    sala FK_persona    FK CONSTRAINT        ALTER TABLE ONLY public.sala
    ADD CONSTRAINT "FK_persona" FOREIGN KEY ("personaId") REFERENCES public.persona("personaId");
 ;   ALTER TABLE ONLY public.sala DROP CONSTRAINT "FK_persona";
       public          postgres    false    4680    225    216            ^           2606    24748    historial FK_persona    FK CONSTRAINT     �   ALTER TABLE ONLY public.historial
    ADD CONSTRAINT "FK_persona" FOREIGN KEY ("personaId") REFERENCES public.persona("personaId");
 @   ALTER TABLE ONLY public.historial DROP CONSTRAINT "FK_persona";
       public          postgres    false    229    4680    216            `           2606    24767    avatar FK_persona    FK CONSTRAINT     �   ALTER TABLE ONLY public.avatar
    ADD CONSTRAINT "FK_persona" FOREIGN KEY ("personaId") REFERENCES public.persona("personaId");
 =   ALTER TABLE ONLY public.avatar DROP CONSTRAINT "FK_persona";
       public          postgres    false    231    216    4680            \           2606    24736    ranking FK_puntuacion    FK CONSTRAINT     �   ALTER TABLE ONLY public.ranking
    ADD CONSTRAINT "FK_puntuacion" FOREIGN KEY ("puntuacionId") REFERENCES public.puntuacion("puntuacionId");
 A   ALTER TABLE ONLY public.ranking DROP CONSTRAINT "FK_puntuacion";
       public          postgres    false    227    223    4688            _           2606    24753    historial FK_ranking    FK CONSTRAINT     �   ALTER TABLE ONLY public.historial
    ADD CONSTRAINT "FK_ranking" FOREIGN KEY ("rankingId") REFERENCES public.ranking("rankingId");
 @   ALTER TABLE ONLY public.historial DROP CONSTRAINT "FK_ranking";
       public          postgres    false    229    4692    227            ]           2606    24731    ranking FK_sala    FK CONSTRAINT     v   ALTER TABLE ONLY public.ranking
    ADD CONSTRAINT "FK_sala" FOREIGN KEY ("salaId") REFERENCES public.sala("salaId");
 ;   ALTER TABLE ONLY public.ranking DROP CONSTRAINT "FK_sala";
       public          postgres    false    225    4690    227            �      x������ � �             x������ � �      �      x������ � �      �   :   x�3�4�L/-�L-*J�JQ�Y��y��y��9鹉�9z�����F�&�f�\1z\\\ ���      �   $   x�3��*M�Sp/-�L-*J��4��2�"���� ?��      �      x������ � �      �      x������ � �      �      x������ � �     