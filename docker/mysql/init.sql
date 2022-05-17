-- create metadata aspect table
CREATE TABLE metadata_aspect_v2 (
  urn                           VARCHAR(500) NOT NULL,
  aspect                        VARCHAR(200) NOT NULL,
  version                       bigint(20) NOT NULL,
  metadata                      longtext NOT NULL,
  systemmetadata                longtext,
  createdon                     datetime(6) NOT NULL,
  createdby                     VARCHAR(255) NOT NULL,
  createdfor                    VARCHAR(255),
  CONSTRAINT pk_metadata_aspect_v2 PRIMARY KEY (urn,aspect,version)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;

INSERT INTO metadata_aspect_v2 (urn, aspect, version, metadata, createdon, createdby) VALUES(
  'urn:li:corpuser:datahub',
  'corpUserInfo',
  0,
  '{"displayName":"Data Hub","active":true,"fullName":"Data Hub","email":"datahub@linkedin.com"}',
  now(),
  'urn:li:corpuser:__datahub_system'
), (
  'urn:li:corpuser:datahub',
  'corpUserEditableInfo',
  0,
  '{"skills":[],"teams":[],"pictureLink":"https://raw.githubusercontent.com/datahub-project/datahub/master/datahub-web-react/src/images/default_avatar.png"}',
  now(),
  'urn:li:corpuser:__datahub_system'
);

-- create metadata index table
CREATE TABLE metadata_index (
 `id` BIGINT NOT NULL AUTO_INCREMENT,
 `urn` VARCHAR(200) NOT NULL,
 `aspect` VARCHAR(150) NOT NULL,
 `path` VARCHAR(150) NOT NULL,
 `longVal` BIGINT,
 `stringVal` VARCHAR(200),
 `doubleVal` DOUBLE,
 CONSTRAINT id_pk PRIMARY KEY (id),
 INDEX longIndex (`urn`,`aspect`,`path`,`longVal`),
 INDEX stringIndex (`urn`,`aspect`,`path`,`stringVal`),
 INDEX doubleIndex (`urn`,`aspect`,`path`,`doubleVal`)
);


-- create CorpUser entity table with CorpUserInfo, CorpUserEditableInfo, DatasetRecommendationsInfo aspects

CREATE TABLE metadata_entity_corpuser (
    urn                                     VARCHAR(500) NOT NULL,
    corpuserinfo                            longtext,
    corpusereditableinfo                    longtext,
    datasetreconmmendationsinfo             longtext,
    CONSTRAINT pk_metadata_entity_corpuser PRIMARY KEY (urn)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;

-- create index virtual column for CorpUser entity table

ALTER TABLE metadata_entity_corpuser
    ADD COLUMN field_corpuserinfo$firstName_idx VARCHAR(255)  GENERATED ALWAYS AS
    (`corpuserinfo` ->> '$.firstName') VIRTUAL;

ALTER TABLE metadata_entity_corpuser
    ADD COLUMN field_corpuserinfo$lastName_idx VARCHAR(255)  GENERATED ALWAYS AS
    (`corpuserinfo` ->> '$.lastName') VIRTUAL;

-- create indexes (firstName, lastName) for the virtual column

CREATE INDEX field_corpuserinfo$firstName_idx ON metadata_entity_corpuser (urn, field_corpuserinfo$firstName_idx);

CREATE INDEX field_corpuserinfo$lasttName_idx ON metadata_entity_corpuser (urn, field_corpuserinfo$lastName_idx);