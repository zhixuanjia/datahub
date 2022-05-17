package com.linkedin.metadata.entity.ebean;

import io.ebean.Model;
import io.ebean.annotation.Index;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "metadata_entity_corpuser")
public class CorpUserEntity extends Model {
  private static final long serialVersionUID = 1L;

  public static final String ALL_COLUMNS = "*";
  public static final String URN_COLUMN = "urn";
  public static final String CORP_USER_INFO_COLUMN = "corpuserinfo";
  public static final String CORP_USER_EDITABLE_COLUMN = "corpusereditableinfo";
  public static final String CORP_USER_KEY = "corpuserkey";
  public static final String STATUS_COLUMN = "corpuserstatus";

  /**
   * Key for an aspect in the table.
   */
  @Embeddable
  @Getter
  @AllArgsConstructor
  @NoArgsConstructor
  @EqualsAndHashCode
  public static class PrimaryKey {

    private static final long serialVersionUID = 1L;

    @NonNull
    @Index
    @Column(name = URN_COLUMN, length = 500, nullable = false)
    private String urn;
  }

  @NonNull
  @EmbeddedId
  @Index
  protected CorpUserEntity.PrimaryKey key;

  @NonNull
  @Column(name = URN_COLUMN, length = 500, nullable = false)
  private String urn;

  @Column(name = CORP_USER_INFO_COLUMN, length = 200, nullable = true)
  private String corpuserinfo;

  @Column(name = CORP_USER_EDITABLE_COLUMN, nullable = true)
  private String corpusereditableinfo;

  @Column(name = CORP_USER_KEY, nullable = true)
  private String getcorpuserkey;

  @Column(name = STATUS_COLUMN, nullable = true)
  protected String corpuserstatus;

  public CorpUserEntity(String urn, String corpuserinfo, String corpusereditableinfo, String key, String status) {
    this(new CorpUserEntity.PrimaryKey(urn), urn, corpuserinfo, corpusereditableinfo, key, status);
  }
}
