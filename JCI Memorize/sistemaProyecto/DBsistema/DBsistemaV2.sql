PGDMP      8                |            sistema    16.4    16.4 P               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    32876    sistema    DATABASE     }   CREATE DATABASE sistema WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE sistema;
                postgres    false            �            1259    32938 	   anfitrion    TABLE     r   CREATE TABLE public.anfitrion (
    "anfitrionId" integer NOT NULL,
    persona character varying(50) NOT NULL
);
    DROP TABLE public.anfitrion;
       public         heap    postgres    false            �            1259    32937    anfitrion_anfitrionId_seq    SEQUENCE     �   CREATE SEQUENCE public."anfitrion_anfitrionId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."anfitrion_anfitrionId_seq";
       public          postgres    false    223                       0    0    anfitrion_anfitrionId_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."anfitrion_anfitrionId_seq" OWNED BY public.anfitrion."anfitrionId";
          public          postgres    false    222            �            1259    32945    avatar    TABLE     l   CREATE TABLE public.avatar (
    "avatarId" integer NOT NULL,
    avatar character varying(250) NOT NULL
);
    DROP TABLE public.avatar;
       public         heap    postgres    false            �            1259    32944    avatar_avatarId_seq    SEQUENCE     �   CREATE SEQUENCE public."avatar_avatarId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."avatar_avatarId_seq";
       public          postgres    false    225                       0    0    avatar_avatarId_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."avatar_avatarId_seq" OWNED BY public.avatar."avatarId";
          public          postgres    false    224            �            1259    32993 	   historial    TABLE     �   CREATE TABLE public.historial (
    "historialId" integer NOT NULL,
    "personaId" integer NOT NULL,
    "rankingId" integer NOT NULL
);
    DROP TABLE public.historial;
       public         heap    postgres    false            �            1259    32992    historial_historialId_seq    SEQUENCE     �   CREATE SEQUENCE public."historial_historialId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."historial_historialId_seq";
       public          postgres    false    233                       0    0    historial_historialId_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."historial_historialId_seq" OWNED BY public.historial."historialId";
          public          postgres    false    232            �            1259    32886    login    TABLE     �   CREATE TABLE public.login (
    "loginId" integer NOT NULL,
    "personaId" integer NOT NULL,
    "loginCorreo" character varying(60) NOT NULL,
    "loginPasswork" character varying(60) NOT NULL
);
    DROP TABLE public.login;
       public         heap    postgres    false            �            1259    32884    login_loginId_seq    SEQUENCE     �   CREATE SEQUENCE public."login_loginId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."login_loginId_seq";
       public          postgres    false    219                       0    0    login_loginId_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."login_loginId_seq" OWNED BY public.login."loginId";
          public          postgres    false    217            �            1259    32885    login_personaId_seq    SEQUENCE     �   CREATE SEQUENCE public."login_personaId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."login_personaId_seq";
       public          postgres    false    219                       0    0    login_personaId_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."login_personaId_seq" OWNED BY public.login."personaId";
          public          postgres    false    218            �            1259    32878    persona    TABLE     �   CREATE TABLE public.persona (
    "personaId" integer NOT NULL,
    "personaNombre" character varying(50) NOT NULL,
    "personaEdad" integer NOT NULL
);
    DROP TABLE public.persona;
       public         heap    postgres    false            �            1259    32877    persona_personaId_seq    SEQUENCE     �   CREATE SEQUENCE public."persona_personaId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."persona_personaId_seq";
       public          postgres    false    216                       0    0    persona_personaId_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."persona_personaId_seq" OWNED BY public.persona."personaId";
          public          postgres    false    215            �            1259    32925    progreso    TABLE     �   CREATE TABLE public.progreso (
    "progresoId" integer NOT NULL,
    "personaId" integer NOT NULL,
    "nivelActual" integer DEFAULT 1 NOT NULL
);
    DROP TABLE public.progreso;
       public         heap    postgres    false            �            1259    32924    progreso_progresoId_seq    SEQUENCE     �   CREATE SEQUENCE public."progreso_progresoId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."progreso_progresoId_seq";
       public          postgres    false    221                       0    0    progreso_progresoId_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."progreso_progresoId_seq" OWNED BY public.progreso."progresoId";
          public          postgres    false    220            �            1259    32969 
   puntuacion    TABLE     �   CREATE TABLE public.puntuacion (
    "puntuacionId" integer NOT NULL,
    "nivelSuperado" integer NOT NULL,
    duracion bigint NOT NULL
);
    DROP TABLE public.puntuacion;
       public         heap    postgres    false            �            1259    32968    puntuacion_puntuacionId_seq    SEQUENCE     �   CREATE SEQUENCE public."puntuacion_puntuacionId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."puntuacion_puntuacionId_seq";
       public          postgres    false    229                       0    0    puntuacion_puntuacionId_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."puntuacion_puntuacionId_seq" OWNED BY public.puntuacion."puntuacionId";
          public          postgres    false    228            �            1259    32976    ranking    TABLE     �   CREATE TABLE public.ranking (
    "rankingId" integer NOT NULL,
    "salaId" integer NOT NULL,
    fecha date NOT NULL,
    "puntuacionId" integer NOT NULL,
    tiempo time with time zone NOT NULL
);
    DROP TABLE public.ranking;
       public         heap    postgres    false            �            1259    32975    ranking_rankingId_seq    SEQUENCE     �   CREATE SEQUENCE public."ranking_rankingId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."ranking_rankingId_seq";
       public          postgres    false    231                       0    0    ranking_rankingId_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."ranking_rankingId_seq" OWNED BY public.ranking."rankingId";
          public          postgres    false    230            �            1259    32952    sala    TABLE     �   CREATE TABLE public.sala (
    "salaId" integer NOT NULL,
    "anfitrionId" integer NOT NULL,
    "personaId" integer NOT NULL,
    duracion time with time zone NOT NULL,
    "salaNombre" character varying(10) NOT NULL
);
    DROP TABLE public.sala;
       public         heap    postgres    false            �            1259    32951    sala_salaId_seq    SEQUENCE     �   CREATE SEQUENCE public."sala_salaId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."sala_salaId_seq";
       public          postgres    false    227                       0    0    sala_salaId_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."sala_salaId_seq" OWNED BY public.sala."salaId";
          public          postgres    false    226            H           2604    32941    anfitrion anfitrionId    DEFAULT     �   ALTER TABLE ONLY public.anfitrion ALTER COLUMN "anfitrionId" SET DEFAULT nextval('public."anfitrion_anfitrionId_seq"'::regclass);
 F   ALTER TABLE public.anfitrion ALTER COLUMN "anfitrionId" DROP DEFAULT;
       public          postgres    false    222    223    223            I           2604    32948    avatar avatarId    DEFAULT     v   ALTER TABLE ONLY public.avatar ALTER COLUMN "avatarId" SET DEFAULT nextval('public."avatar_avatarId_seq"'::regclass);
 @   ALTER TABLE public.avatar ALTER COLUMN "avatarId" DROP DEFAULT;
       public          postgres    false    224    225    225            M           2604    32996    historial historialId    DEFAULT     �   ALTER TABLE ONLY public.historial ALTER COLUMN "historialId" SET DEFAULT nextval('public."historial_historialId_seq"'::regclass);
 F   ALTER TABLE public.historial ALTER COLUMN "historialId" DROP DEFAULT;
       public          postgres    false    232    233    233            D           2604    32889    login loginId    DEFAULT     r   ALTER TABLE ONLY public.login ALTER COLUMN "loginId" SET DEFAULT nextval('public."login_loginId_seq"'::regclass);
 >   ALTER TABLE public.login ALTER COLUMN "loginId" DROP DEFAULT;
       public          postgres    false    217    219    219            E           2604    32890    login personaId    DEFAULT     v   ALTER TABLE ONLY public.login ALTER COLUMN "personaId" SET DEFAULT nextval('public."login_personaId_seq"'::regclass);
 @   ALTER TABLE public.login ALTER COLUMN "personaId" DROP DEFAULT;
       public          postgres    false    218    219    219            C           2604    32881    persona personaId    DEFAULT     z   ALTER TABLE ONLY public.persona ALTER COLUMN "personaId" SET DEFAULT nextval('public."persona_personaId_seq"'::regclass);
 B   ALTER TABLE public.persona ALTER COLUMN "personaId" DROP DEFAULT;
       public          postgres    false    215    216    216            F           2604    32928    progreso progresoId    DEFAULT     ~   ALTER TABLE ONLY public.progreso ALTER COLUMN "progresoId" SET DEFAULT nextval('public."progreso_progresoId_seq"'::regclass);
 D   ALTER TABLE public.progreso ALTER COLUMN "progresoId" DROP DEFAULT;
       public          postgres    false    221    220    221            K           2604    32972    puntuacion puntuacionId    DEFAULT     �   ALTER TABLE ONLY public.puntuacion ALTER COLUMN "puntuacionId" SET DEFAULT nextval('public."puntuacion_puntuacionId_seq"'::regclass);
 H   ALTER TABLE public.puntuacion ALTER COLUMN "puntuacionId" DROP DEFAULT;
       public          postgres    false    228    229    229            L           2604    32979    ranking rankingId    DEFAULT     z   ALTER TABLE ONLY public.ranking ALTER COLUMN "rankingId" SET DEFAULT nextval('public."ranking_rankingId_seq"'::regclass);
 B   ALTER TABLE public.ranking ALTER COLUMN "rankingId" DROP DEFAULT;
       public          postgres    false    231    230    231            J           2604    32955    sala salaId    DEFAULT     n   ALTER TABLE ONLY public.sala ALTER COLUMN "salaId" SET DEFAULT nextval('public."sala_salaId_seq"'::regclass);
 <   ALTER TABLE public.sala ALTER COLUMN "salaId" DROP DEFAULT;
       public          postgres    false    227    226    227                      0    32938 	   anfitrion 
   TABLE DATA           ;   COPY public.anfitrion ("anfitrionId", persona) FROM stdin;
    public          postgres    false    223   �Z                 0    32945    avatar 
   TABLE DATA           4   COPY public.avatar ("avatarId", avatar) FROM stdin;
    public          postgres    false    225   �Z                 0    32993 	   historial 
   TABLE DATA           L   COPY public.historial ("historialId", "personaId", "rankingId") FROM stdin;
    public          postgres    false    233   �Z       �          0    32886    login 
   TABLE DATA           W   COPY public.login ("loginId", "personaId", "loginCorreo", "loginPasswork") FROM stdin;
    public          postgres    false    219   [       �          0    32878    persona 
   TABLE DATA           N   COPY public.persona ("personaId", "personaNombre", "personaEdad") FROM stdin;
    public          postgres    false    216   Z[       �          0    32925    progreso 
   TABLE DATA           L   COPY public.progreso ("progresoId", "personaId", "nivelActual") FROM stdin;
    public          postgres    false    221   �[                 0    32969 
   puntuacion 
   TABLE DATA           O   COPY public.puntuacion ("puntuacionId", "nivelSuperado", duracion) FROM stdin;
    public          postgres    false    229   �[       	          0    32976    ranking 
   TABLE DATA           W   COPY public.ranking ("rankingId", "salaId", fecha, "puntuacionId", tiempo) FROM stdin;
    public          postgres    false    231   �[                 0    32952    sala 
   TABLE DATA           \   COPY public.sala ("salaId", "anfitrionId", "personaId", duracion, "salaNombre") FROM stdin;
    public          postgres    false    227   �[                  0    0    anfitrion_anfitrionId_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."anfitrion_anfitrionId_seq"', 1, false);
          public          postgres    false    222                       0    0    avatar_avatarId_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."avatar_avatarId_seq"', 1, false);
          public          postgres    false    224                       0    0    historial_historialId_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."historial_historialId_seq"', 1, false);
          public          postgres    false    232                       0    0    login_loginId_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."login_loginId_seq"', 1, true);
          public          postgres    false    217                        0    0    login_personaId_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."login_personaId_seq"', 1, true);
          public          postgres    false    218            !           0    0    persona_personaId_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."persona_personaId_seq"', 1, true);
          public          postgres    false    215            "           0    0    progreso_progresoId_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."progreso_progresoId_seq"', 1, false);
          public          postgres    false    220            #           0    0    puntuacion_puntuacionId_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."puntuacion_puntuacionId_seq"', 1, false);
          public          postgres    false    228            $           0    0    ranking_rankingId_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."ranking_rankingId_seq"', 1, false);
          public          postgres    false    230            %           0    0    sala_salaId_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."sala_salaId_seq"', 1, false);
          public          postgres    false    226            W           2606    32943    anfitrion anfitrion_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.anfitrion
    ADD CONSTRAINT anfitrion_pkey PRIMARY KEY ("anfitrionId");
 B   ALTER TABLE ONLY public.anfitrion DROP CONSTRAINT anfitrion_pkey;
       public            postgres    false    223            Y           2606    32950    avatar avatar_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.avatar
    ADD CONSTRAINT avatar_pkey PRIMARY KEY ("avatarId");
 <   ALTER TABLE ONLY public.avatar DROP CONSTRAINT avatar_pkey;
       public            postgres    false    225            Q           2606    32894    login correo 
   CONSTRAINT     h   ALTER TABLE ONLY public.login
    ADD CONSTRAINT correo UNIQUE ("loginCorreo") INCLUDE ("loginCorreo");
 6   ALTER TABLE ONLY public.login DROP CONSTRAINT correo;
       public            postgres    false    219            a           2606    32998    historial historial_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.historial
    ADD CONSTRAINT historial_pkey PRIMARY KEY ("historialId");
 B   ALTER TABLE ONLY public.historial DROP CONSTRAINT historial_pkey;
       public            postgres    false    233            S           2606    32892    login login_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_pkey PRIMARY KEY ("loginId");
 :   ALTER TABLE ONLY public.login DROP CONSTRAINT login_pkey;
       public            postgres    false    219            O           2606    32883    persona persona_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.persona
    ADD CONSTRAINT persona_pkey PRIMARY KEY ("personaId");
 >   ALTER TABLE ONLY public.persona DROP CONSTRAINT persona_pkey;
       public            postgres    false    216            U           2606    32931    progreso progreso_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.progreso
    ADD CONSTRAINT progreso_pkey PRIMARY KEY ("progresoId");
 @   ALTER TABLE ONLY public.progreso DROP CONSTRAINT progreso_pkey;
       public            postgres    false    221            ]           2606    32974    puntuacion puntuacion_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.puntuacion
    ADD CONSTRAINT puntuacion_pkey PRIMARY KEY ("puntuacionId");
 D   ALTER TABLE ONLY public.puntuacion DROP CONSTRAINT puntuacion_pkey;
       public            postgres    false    229            _           2606    32981    ranking ranking_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.ranking
    ADD CONSTRAINT ranking_pkey PRIMARY KEY ("rankingId");
 >   ALTER TABLE ONLY public.ranking DROP CONSTRAINT ranking_pkey;
       public            postgres    false    231            [           2606    32957    sala sala_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.sala
    ADD CONSTRAINT sala_pkey PRIMARY KEY ("salaId");
 8   ALTER TABLE ONLY public.sala DROP CONSTRAINT sala_pkey;
       public            postgres    false    227            d           2606    32958    sala FK_anfitrion    FK CONSTRAINT     �   ALTER TABLE ONLY public.sala
    ADD CONSTRAINT "FK_anfitrion" FOREIGN KEY ("anfitrionId") REFERENCES public.anfitrion("anfitrionId");
 =   ALTER TABLE ONLY public.sala DROP CONSTRAINT "FK_anfitrion";
       public          postgres    false    227    223    4695            b           2606    32895    login FK_persona    FK CONSTRAINT     �   ALTER TABLE ONLY public.login
    ADD CONSTRAINT "FK_persona" FOREIGN KEY ("personaId") REFERENCES public.persona("personaId");
 <   ALTER TABLE ONLY public.login DROP CONSTRAINT "FK_persona";
       public          postgres    false    216    4687    219            c           2606    32932    progreso FK_persona    FK CONSTRAINT     �   ALTER TABLE ONLY public.progreso
    ADD CONSTRAINT "FK_persona" FOREIGN KEY ("personaId") REFERENCES public.persona("personaId");
 ?   ALTER TABLE ONLY public.progreso DROP CONSTRAINT "FK_persona";
       public          postgres    false    4687    216    221            e           2606    32963    sala FK_persona    FK CONSTRAINT        ALTER TABLE ONLY public.sala
    ADD CONSTRAINT "FK_persona" FOREIGN KEY ("personaId") REFERENCES public.persona("personaId");
 ;   ALTER TABLE ONLY public.sala DROP CONSTRAINT "FK_persona";
       public          postgres    false    216    4687    227            h           2606    32999    historial FK_persona    FK CONSTRAINT     �   ALTER TABLE ONLY public.historial
    ADD CONSTRAINT "FK_persona" FOREIGN KEY ("personaId") REFERENCES public.persona("personaId");
 @   ALTER TABLE ONLY public.historial DROP CONSTRAINT "FK_persona";
       public          postgres    false    216    4687    233            f           2606    32987    ranking FK_puntuacion    FK CONSTRAINT     �   ALTER TABLE ONLY public.ranking
    ADD CONSTRAINT "FK_puntuacion" FOREIGN KEY ("puntuacionId") REFERENCES public.puntuacion("puntuacionId");
 A   ALTER TABLE ONLY public.ranking DROP CONSTRAINT "FK_puntuacion";
       public          postgres    false    4701    231    229            i           2606    33004    historial FK_ranking    FK CONSTRAINT     �   ALTER TABLE ONLY public.historial
    ADD CONSTRAINT "FK_ranking" FOREIGN KEY ("rankingId") REFERENCES public.ranking("rankingId");
 @   ALTER TABLE ONLY public.historial DROP CONSTRAINT "FK_ranking";
       public          postgres    false    231    4703    233            g           2606    32982    ranking FK_sala    FK CONSTRAINT     v   ALTER TABLE ONLY public.ranking
    ADD CONSTRAINT "FK_sala" FOREIGN KEY ("salaId") REFERENCES public.sala("salaId");
 ;   ALTER TABLE ONLY public.ranking DROP CONSTRAINT "FK_sala";
       public          postgres    false    4699    231    227                  x������ � �            x������ � �            x������ � �      �   9   x�3�4�L/-�L-*J�JQ�Y��y��y��9鹉�9z�����F�&�f\1z\\\ �V�      �   !   x�3��*M�Sp/-�L-*J��4������� c��      �      x������ � �            x������ � �      	      x������ � �            x������ � �     