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
@Table(name = "metadata_entity_dataset")
public class DatasetEntity extends Model {

  private static final long serialVersionUID = 1L;

  public static final String ALL_COLUMNS = "*";
  public static final String URN_COLUMN = "urn";

  public static final String BROWSE_PATHS_COLUMN = "browsepaths";
  public static final String CONTAINER_COLUMN = "container";
  public static final String DATA_PLATFORM_INSTANCE_COLUMN = "dataplatforminstance";
  public static final String DATASET_PROPERTIES_COLUMN = "datasetproperties";
  public static final String EDITABLE_SCHEMA_METADATA_COLUMN = "editableschemametadata";
  public static final String INSTITUTIONAL_MEMORY_COLUMN = "institutionalmemory";
  public static final String OWNERSHIP_COLUMN = "ownership";
  public static final String SCHEMA_METADATA_COLUMN = "schemametadata";
  public static final String UPSTREAM_LINEAGE_COLUMN = "upstreamlineage";
  public static final String GLOBAL_TAGS_COLUMN = "globaltags";

  public static final String DATASET_KEY = "datasetkey";

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
  protected DatasetEntity.PrimaryKey key;

  @NonNull
  @Column(name = URN_COLUMN, length = 500, nullable = false)
  private String urn;

  @Column(name = BROWSE_PATHS_COLUMN, nullable = true)
  private String browsepaths;

  @Column(name = CONTAINER_COLUMN, nullable = true)
  private String container;

  @Column(name = DATA_PLATFORM_INSTANCE_COLUMN, nullable = true)
  private String dataplatforminstance;

  @Column(name = DATASET_PROPERTIES_COLUMN, nullable = true)
  private String datasetproperties;

  @Column(name = EDITABLE_SCHEMA_METADATA_COLUMN, nullable = true)
  private String editableschemametadata;

  @Column(name = INSTITUTIONAL_MEMORY_COLUMN, nullable = true)
  private String institutionalmemory;

  @Column(name = OWNERSHIP_COLUMN, nullable = true)
  private String ownership;

  @Column(name = SCHEMA_METADATA_COLUMN, nullable = true)
  private String schemametadata;

  @Column(name = UPSTREAM_LINEAGE_COLUMN, nullable = true)
  private String upstreamlineage;

  @Column(name = GLOBAL_TAGS_COLUMN, nullable = true)
  private String globaltags;

  @Column(name = DATASET_KEY, nullable = true)
  private String datasetkey;

  public DatasetEntity(String urn, String browsepaths, String container, String dataplatforminstance,
      String datasetproperties, String editableschemametadata, String institutionalmemory, String ownership,
      String schemametadata, String upstreamlineage, String globaltags, String datasetkey) {
    this(new DatasetEntity.PrimaryKey(urn), urn, browsepaths, container, dataplatforminstance, datasetproperties,
        editableschemametadata, institutionalmemory, ownership, schemametadata, upstreamlineage, globaltags, datasetkey);
  }
}
